# Digital Life Web application installation guide

**[Enterprise-Web-Application](#_esnhi1wsz41y) 2**

**[About the Web Applications Installation and Configuration Guide](#_b5pvgxhdrkoz) 3**

[General information](#General information) 3

[Running the client](#_3b4vi0pe7762) 3

[Using the Client API](#_9ijsn030fhci) 4

[Database configuration](#_zdc72iuhegfi) 6

[Using RESTful API](#_gqkpm22pum74) 7

**[Database Postgres EERD](#_wgbm477abzh0) 8**

**[Contribution of each team member](#_c17ipd5f6b9j) 9**

[Lawrance Bahem:](#_xon5pg16xdr1) 9

[Back-end:](#_tv785fx49vjk) 9

[Front-end:](#_26sfqxnk37e4) 9

[Tico Vermeer:](#_1f9v9q9hnp01) 10

[Back-end:](#_41yzse9zzmu) 10

[Front-end:](#_lgxzmnfesqdt) 10

[Bugra Karaaslan:](#_98611nnkrzka) 10

[Front-end:](#_huis5w24bu25) 11

[Back-end:](#_ok1gpeh3kbq4) 11

[Lucas Melis:](#_wepxhjxwm3pb) 11

[Back-end:](#_j8j94hoeeakm) 11

[Front-end:](#_s9jel210dflm) 11

[Moustafa Fadil:](#_son87uw6nlw7) 11

[Back-end:](#_v3qulmrg0b82) 11

[Front-end:](#_q4nbegvwcsj3) 11

##


## Enterprise-Web-Application

An Enterprise Web Application that aims at helping the users with visual impairments to do all kinds of activities that they&#39;d like to do by finding an activity that suits their interests. Absolutely there is a possibility to choose interests when creating a new account, which will help the user to see the appropriate activities based on the selected interests. The activities are divided into categories, to make it easier for the user to find certain activities of a certain category. By using the filter, it is possible to find the needed category/activity.

During the development process, we had to test the application with real users with visual impairments to improve the application based on the user&#39;s feedback. We tested the application with several color combinations to find out which color is the best to choose. But that was difficult since color blindness affects people in different manners and that makes it difficult to choose a safe color that applies to all colorblind users. To have this problem solved, we&#39;ve built a speech recognition to help the user to apply the color as preferred. By clicking on the mic the user can give a command to change the color of the whole website and it&#39;s also possible to navigate through the app by using this speech recognition.

##


## About the Web Applications Installation and Configuration Guide

## General information

The Web Applications Installation and Configuration Guide describes the configuration settings needed to install the Digital Life web application. It assumes you have cloned the project on your machine, if you didn&#39;t clone the project yet you can start cloning the project

| git@gitlab.fdmci.hva.nl:se-ewa-2020-2021/digital-life-5.git |
| --- |

you can also try the HTTP version if the SSH version does not work for you:

| https://gitlab.fdmci.hva.nl/se-ewa-2020-2021/digital-life-5.git |
| --- |

Now you are ready to run the application.

### **Running the client**

Go to the directory cd fe-app

First, you should install the dependencies.

| npm install |
| --- |

Ti start the server use the following command:

| npm start |
| --- |

It will start a server running on port 8080.

###


### **Using the Client API**

We have built a simple front-end application to demonstrate how event handling can be managed on the client-side.

You should install Angular first. If you do not have it yet, go to cd fe-app and run the following command in your terminal:

| npm install -g @angular/cli |
| --- |

More information about the Angular environment can be[found here](https://angular.io/guide/setup-local).

To run the application, you should first install dependencies in the root folder of the front-end application.

| npm install |
| --- |

Then, you can start a local server, by running this command in the root folder of the front-end application.

| ng serve |
| --- |

It will run on port http://localhost:4200/

The project is divided into two files &#39;fe-app&#39; and &#39;be-app&#39;. The &#39;fe-app&#39; contains the files of the frontend (client-side) and the &#39;be-app&#39; contains the files of the backend (server-side).


In the &#39;be-app/src/main/resources&#39; you find four different files of application.properties as shown below

![alt_text](readme-images/applicationProperties.png "image_tooltip")

The application.properties file is the main file of the rest of the properties files, in this file you&#39;re able to choose which configured file you&#39;d like to run for example by changing the value of spring.profiles.active=dev

in application.properties into spring.profiles.active=staging

The application will use the file application.staging.properties, which might have a different configuration than the application.dev.properties

One of the requirements for EWA applications is storing and retrieving data from a relational database. A typical EWA application is composed of at least three physical layers: the front-end node, the back-end node and the database node. The figure below presents a deployment diagram of an EWA app.

![alt_text](readme-images/EWAapp.png "image_tooltip")

### **Database configuration**

When installing the project you may want to run it on a certain database and this is possible by configuring a certain file of the application.properties sub-files for example:

- the application-staging.properties/application-production.properties below contains the necessary parameters to use for your database.
```java
| // setting the database
//note: dialects are auto detected by hibernate
 spring.datasource.url=\&lt;your-jdbc-url\&gt;
 spring.datasource.username=\&lt;user\&gt;
 spring.datasource.password=\&lt;password\&gt;

//drop and create table again, good for testing, comment this in production
 spring.jpa.hibernate.ddl-auto=create
//used to initialise the db with data
 spring.datasource.initialization-mode=always
 spring.datasource.data=classpath:/data.sql

//turn statistics on
 spring.jpa.properties.hibernate.generate\_statistics=true
 logging.level.org.hibernate.stat=debug

//show all queries
 spring.jpa.show-sql=true
 spring.jpa.properties.hibernate.format\_sql=true
 logging.level.org.hibernate.type=trace

```


If you&#39;re done configuring your database you can tell spring boot which configuration you want to run by setting that in your main application.properties for example if you have configured the application-production.properties, you can set that in you can set in the main application.properties spring.profiles.active=production

In case that you want to use the development environment you can set that in your

main application.properties as follows:

| spring.profiles.active=dev |
| --- |

That will use the application-dev.properties, which has configuration that runs on your [http://localhost:8080/](http://localhost:8080/).

## Using RESTful API

To interact with the API, you should download an HTTP client. For this workshop we recommend you using Postman. The following link allows you to get a collection of examples to interact with the API.

Below, a summary of operations:.

Do not forget to add the token when making requests. You can use the Authorization Tab \&gt; Bearer Token and paste the token to make requests. If the token was not provided or is invalid, a 401 message will be returned. In other words for some requests you need to log in first for example:

If you make request to [http://localhost:8080/user/all](http://localhost:8080/user/all) and you are not logged in yet, you will get an exception of status: 500, which indicates that you&#39;re not authenticated yet and you need to log in as an admin to see the users, otherwise you will get an exception of status 403 that means you&#39;re not allowed to see the users.

###


## Database Postgres EERD

![alt_text](readme-images/ERD.png "image_tooltip")
## Contribution of each team member

### Lawrance Bahem:

#### Back-end:

**Classes**

ExceptionsFolder contains the following exception that I have built:

- AuthenticationException
- AuthorizationException
- PreConditionFailed
- ResourceNotFound
- UnAuthorizedException

**Models** that I have built:

- User
- Login
- Interest
- CustomDateSerializer

**Repositories:**

- EntityRepository (interface)
- Identifiable (interface)
- AbstractEntityRepositoryJpa (abstract)
- InterestRepositoryJpa
- UserRepositoryJpa

**Controllers:**

- UserController
- AuthenticateController

**Service:**

- APIConfiguration

**Utilities:**

- JWToken
- JWTRequestFilter

#### Front-end:

Components:

- AdminComponent
- Activity-editComponent
- User-editComponent

- HeaderComponent
- LoginComponent

- NavbarComponent

- ProfileComponent

- RegisterComponent

**Models:**

- User
- Interest

**Services:**

- Admin
- AuthenticationService
- AuthenticationIntercepterService
- ConvertImageService
- SpeechRecognitionService
- SessionStorageService

- UserService

### Tico Vermeer:

#### Back-end:

**Repositories:**

- ActivityRepositoryJpa
- CategoryRepositoryJpa

**Controllers:**

- ActivityController
- CategoryController

#### Front-end:

**Models:**

- Activity
- Category

**Services:**

- activityService
- categoryService

**Pages that I have built:**

- The activity-overview with all its functionalities
- The activity- detail pages except the reactions
- The category pages

###


### Bugra Karaaslan:

**Builded Models:**

Category

**Worked on:**

#### Front-end:

Category Admin page

Homepage

Searching categories homepage

**Service** :

adminService

#### **Back-end** :

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

####
Front-end:

Home component

Contact component

About us component

Nav bar component
