// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Create a variable to keep track of all the filters as an object.
var filters = {};

// Use this function to update the filters. 
function updateFilters() {

    // Save the element that was changed as a variable.
    let changed_element = d3.select(this);
    // Save the value that was changed as a variable.
    let changed_value = changed_element.property("value");
    // Save the id of the filter that was changed as a variable.
    let changed_id = changed_element.attr("id");
  
    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changed_value) {
        filters[changed_id] = changed_value;
    }
    else {
        delete filters[changed_id];
    }
  
    // Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // // Use this function to filter the table when data is entered.
  // function filterTable() {
  
  //   // Set the filtered data to the tableData.
  //   let filteredData = tableData;
  
  //   // Loop through all of the filters and keep any data that
  //   // matches the filter values
  //   Object.entries(filters).forEach(([key, value]) => {
  //       console.log(key);
  //       console.log(value);
  //       filteredData = filteredData.filter(row => row[key] === value);
  //   });
  
  //   // Finally, rebuild the table using the filtered data
  //   buildTable(filteredData);
  // }
  
   // Use this function to filter the table when data is entered.
   function filterTable() {
  
    // Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
        console.log(key);
        console.log(value);
        filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // Attach an event to listen for changes to each filter
  d3.selectAll("select").on("change", updateFilters); 
  
  // Build the table when the page loads
  buildTable(tableData);