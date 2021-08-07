# Mental Health Machine Learning 

## Presentation
Topic: Determining the presence of a mental health disorder or a specific mental illness in individuals working in Tech

- Within our team we have some knowledge and interest in behavioral sciences. We originally wanted to determine if a 
college student has depression based on their major of study. We quickly learned that kind of data was not attainable 
and started searching for a different data set still involving depression. We found a data set involving mental illness
in the Tech industry and found that even more interesting than our original topic.
- We found our data sets through Kaggle under “OSMI Mental Health in Tech Survey.” We decided to look at the datasets for years
2017 through 2019 because the columns were identical to one another.
- With this data we hope to build a machine learning model that will determine if an individual in the Tech industry has
a mental illness. We do not know if we want to determine depression in an individual or if we want to determine if an 
individual has any mental illness.
https://docs.google.com/presentation/d/1Q9a80p3waqXFFyu41QArDrO-no4XnSO7y0TwBshJHQA/edit?usp=sharing

## Machine Learning Model

We chose a logistic regression for our machine learning model as our desired dependent variable output is categorical and binary: whether or not a variable can predict the presence of a mental health disorder diagnosis for individuals in the tech industry (1 or 0). Such a model has the potential to provide correlations that could significantly impact the understanding of mental health disorders as they relate to the tech industry. However, we are also limited by the binary output of the algorithm. There are many different mental health disorders and providing only a yes or no output does not fully capture the story. If we had more time, we would have loved to attempt a multiple categorical output regression that is able to predict which mental health disorder an individual in the tech industry might have been diagnosed with. This could prove to be very beneficial in determining what potentially causes such disorders with employees in the tech industry. https://user-images.githubusercontent.com/79720084/128565845-a976593d-7c4e-496d-b665-f05b96ce7abe.png

In order for the model to effectively predict accuracy with the data, the data first has to be cleaned and modified. The only columns needed throughout the testing of this model were Gender, Age, Self-Employment Status, and Mental Health Disorder Diagnosis Status. https://user-images.githubusercontent.com/79720084/128565679-e26a47f3-3e5c-46b7-b9eb-7184268a03d9.png All columns pertaining to these variables had to be converted to a numerical output. That meant converting Gender, Self-Employment Status, and Mental Health Disorder Diagnosis Status to binary (1 or 0, present or absent). We chose these variables as we hypothesized they have the strongest correlation with mental health in the tech industry. Gender and Age have been factors of influence in many other industries and communities, and whether an individual is self-employed or not may affect how happy they are in their position and with their work. https://user-images.githubusercontent.com/79720084/128565782-25076512-92c0-410d-8a06-38193501feb7.png Though the model using Gender data to predict Mental Health Disorder Diagnosis Status had the strongest accuracy, it is still not high enough for us to consider as a potential final variable. We will continue to explore other columns in the dataset. https://user-images.githubusercontent.com/79720084/128565919-9d3a201a-eac4-4a97-a215-c010715a56a3.png
The data was split into a training set and a testing set with 80 percent and 20 percent of the data, respectively. The dependent variables used were Age, Self-Employment Status, and Gender. The independent variable used was Mental Health Disorder Diagnosis Status.

## Dashboard
- Storyboard of google slides. 
- We are using a Flask template along with D3.js to create a fully functioning and interactive dashboard. 
- A description of our topic and model will be at the top of the page. 
- We have our dataset in a table along with a way to filter the data based on year, mental illness, gender, employment status,
and company size. 
- There will also be some other graphs and charts on a breakdown of each disorder.

## Communication
Communication has been through zoom on Tuesdays and Thursdays 7:30 pm till 9:00 pm and though
slack in a group message among the four team members. Each meeting we decide what needs to be
done by the next meeting and if we have any questions they go into the slack group message.
