#install.packages("RSQLite") #perhaps needed
library("RSQLite")

# connect to the sqlite file
sqlite    <- dbDriver("SQLite")
exampledb <- dbConnect(sqlite,"mental_health.sqlite")

dbListTables(exampledb)