
# Enterprise-Web-Application

An Enterprise Web Application that aims at helping the users with visual impairments to do all kinds of activities that they’d like to do by finding an activity that suits their interests. Absolutely there is a possibility to choose interests when creating a new account, which will help the user to see the appropriate activities based on the selected interests. The activities are divided into categories, to make it easier for the user to find certain activities of a certain category. By using the filter, it is possible to find the needed category/activity.

During the development process, we had to test the application with real users with visual impairments to improve the application based on the user’s feedback. We tested the application with several color combinations to find out which color is the best to choose. But that was difficult since color blindness affects people in different manners and that makes it difficult to choose a safe color that applies to all colorblind users. To have this problem solved, we’ve built a speech recognition to help the user to apply the color as preferred. By clicking on the mic the user can give a command to change the color of the whole website and it’s also possible to navigate through the app by using this speech recognition.


## 


# About the Web Applications Installation and Configuration Guide


### **General information**

The Web Applications Installation and Configuration Guide describes the configuration settings needed to install the Digital Life web application. It assumes you have cloned the project on your machine.

The project is divided into two files ‘fe-app’ and  ‘be-app’. The ‘fe-app‘ contains the files of the frontend (client-side) and the ‘be-app‘ contains the files of the backend (server-side).

In the ‘be-app/src/main/resources’ you find four different files of application.properties as shown below



<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


The application.properties file is the main file of the rest of the properties files, in this file you’re able to choose which configured file you’d like to run for example by changing the value of` spring.profiles.active=dev`

in application.properties into `spring.profiles.active=staging`

The application will use the file application.staging.properties, which might have a different configuration than the application.dev.properties



One of the requirements for EWA applications is storing and retrieving data from a relational database. A typical EWA application is composed of at least three physical layers: the front-end node, the back-end node and the database node. The figure below presents a deployment diagram of an EWA app.



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")





### **Database configuration**

When installing the project you may want to run it on a certain database and this is possible by configuring a certain file of the application.properties files for example by changing the application.properties file configuration as follows:

The application.properties below contains the necessary parameters to use for your database.


```
# setting the database
# note: dialects are auto detected by hibernate
spring.datasource.url=<your-jdbc-url>
spring.datasource.username=<user>
spring.datasource.password=<password>

# drop and create table again, good for testing, comment this in production
spring.jpa.hibernate.ddl-auto=create
# used to initialise the db with data
spring.datasource.initialization-mode=always
spring.datasource.data=classpath:/data.sql

#turn statistics on
spring.jpa.properties.hibernate.generate_statistics=true
logging.level.org.hibernate.stat=debug

#show all queries
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
logging.level.org.hibernate.type=trace
```



# 


# Database Postgres EERD



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")





# Contribution of each team member


### Lawrance Bahem:


#### Back-end:

**Classes**

ExceptionsFolder contains the following exception that I have built:



*   AuthenticationException
*   AuthorizationException
*   PreConditionFailed
*   ResourceNotFound
*   UnAuthorizedException

**Models** that I have built:



*   User
*   Login
*   Interest
*   CustomDateSerializer

**Repositories:**



*   EntityRepository (interface)
*   Identifiable (interface)
*   AbstractEntityRepositoryJpa (abstract)
*   InterestRepositoryJpa
*   UserRepositoryJpa

**Controllers:**



*   UserController
*   AuthenticateController

**Service:**



*   APIConfiguration

**Utilities:**



*   JWToken
*   JWTRequestFilter


#### Front-end:

Components:



*   AdminComponent
*   Activity-editComponent
*   User-editComponent
*   HeaderComponent
*   LoginComponent
*   NavbarComponent
*   ProfileComponent
*   RegisterComponent

**Models:**



*   User
*   Interest

**Services:**



*   Admin
*   AuthenticationService
*   AuthenticationIntercepterService
*   ConvertImageService
*   SpeechRecognitionService
*   SessionStorageService
*   UserService


### Tico Vermeer:


#### Back-end:

**Repositories:**



*   ActivityRepositoryJpa
*   CategoryRepositoryJpa

**Controllers:**



*   ActivityController
*   CategoryController


#### Front-end:

**Models:**



*   Activity
*   Category

**Services:**



*   activityService
*   categoryService

**Pages that I have built:**



*   The activity-overview with all its functionalities
*   The activity- detail pages except the reactions
*   The category pages


### Bugra Karaaslan:

**Builded Models:**

Category

**<span style="text-decoration:underline;">Worked on:</span>**


#### Front-end:

Category Admin page

Homepage

Searching categories homepage

**Service**:

adminService


#### **Back-end**:

CategoryController


### Lucas Melis:


#### Back-end:

Reaction controller

Reaction Model

User service

User controller

ActivityControllerJPA


#### Front-end:

Activity

Contact Page

Reaction

Matching


### Moustafa Fadil:


#### Back-end:

Reaction controller

Reaction model

User service getMatchingActivities()

User controller getMatching()

ActivityControllerJPA getActivitiyMatches


####  \
Front-end:

Home component

Contact component

About us component

Nav bar component

 
