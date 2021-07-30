# Mental Health Machine Learning 

## Presentation
Topic: Determining the presence of a mental health disorder or a specific mental illness in individuals working in Tech

-	Within our team we have some knowledge and interest in behavioral sciences. We originally
wanted to determine if a college student has depression based on their major of study. We 
quickly learned that kind of data was not attainable and started searching for a different 
data set still involving depression. We found a data set involving mental illness in the 
Tech industry and found that even more interesting than our original topic.
-	We found our data set through Kaggle, titled “OSMI Mental Health in Tech Survey 2016.” This 
data set has 63 columns and 1434 rows of data from a survey about mental health in the Tech
industry.
-	With this data we hope to build a machine learning model that will determine if an 
individual in the Tech industry has a mental illness. We do not know if we want to determine 
depression in an individual or if we want to determine if an individual has any mental illness.

https://docs.google.com/presentation/d/1Q9a80p3waqXFFyu41QArDrO-no4XnSO7y0TwBshJHQA/edit?usp=sharing

## Machine Learning Model
Pandas will be used to read in the data and clean it. Further analysis will be completed using Python.
- We started by determining which columns we wanted to keep for our analysis. Many columns asked about
 previous employers and we were only interested in the current employer's work environment. We chose
 questions that could have an affect on the individual's mental health in the workplace instead of a 
 question that would be a result of a mental illness. Overall, we agreed on around ten questions that
 we thought would give us the most insight into the question we're trying to answer.
- After choosing our columns we had clean the data. We shortened some of the column names for easy
 readability, changed values from strings to integers, created bins for values with a range of integers,
 and filtered some columns.
- If we choose to determine depression, a supervised learning model will be the best model to use
 because our data set has labeled data and a single outcome. After converting the mental illness to a
 binary outcome we can use the Sklearn library to create a classifier and logistic regression to predict 
 the outcome. We split the data into a training set with 80 percent of the data and a testing set with 20
 percent of the data.
- If we choose to determine any mental illness within individuals who work in Tech, a supervised
learning would also be more suitable for the question we are asking as well as the method used above in
determining depression.

## Dashboard
- Storyboard of google slides
- We are using a Flask template along with D3.js to create a fully functioning and interactive dashboard.
- A description of our topic and model will be at the top of the page.
- We have our dataset in a table along with a way to filter the data based on year, mental illness,
 gender, employment status, and company size.
- There will also be some other graphs and charts on a breakdown of each disorder.

## Communication
Communication has been through zoom on Tuesdays and Thursdays 7:30 pm till 9:00 pm and though
slack in a group message among the four team members. Each meeting we decide what needs to be
done by the next meeting and if we have any questions they go into the slack group message.
