# Digital Life Web application installation guide

**[About the Web Applications Installation and Configuration Guide](#about-the-web-applications-installation-and-configuration-guide)**

[General information](#general-information) 

[Running the client](#running-the-client) 

[Using the Client API](#using-the-client-api) 

[Database configuration](#database-configuration) 

[Using RESTful API](#using-restful-api)

**[Database Postgres EERD](#database-postgres-eerd)**

**[Contribution of each team member](#contribution-of-each-team-member)**

[Lawrance Bahem:](#lawrance-bahem) 

[Tico Vermeer:](#tico-vermeer) 

[Bugra Karaaslan:](#bugra-karaaslan) 

[Lucas Melis:](#lucas-melis)

[Moustafa Fadil:](#moustafa-fadil)

**[UML system documentation](#uml-system-documentation)**


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

The application.properties file is the main file of the rest of the properties files, in this file you&#39;re able to choose which configured file you&#39;d like to run for example by changing the value of ```spring.profiles.active=<value>```

in application.properties into ```spring.profiles.active=staging```

The application will use the file application.staging.properties, which might have a different configuration than the application.dev.properties

One of the requirements for EWA applications is storing and retrieving data from a relational database. A typical EWA application is composed of at least three physical layers: the front-end node, the back-end node and the database node. The figure below presents a deployment diagram of an EWA app.

![alt_text](readme-images/EWAapp.png "image_tooltip")

### **Database configuration**

When installing the project you may want to run it on a certain database and this is possible by configuring a certain file of the application.properties sub-files for example:

- the application-staging.properties/application-production.properties below contains the necessary parameters to use for your database.
```java
| // setting the database
//note: dialects are auto detected by hibernate
 spring.datasource.url=<jdbc-url>
 spring.datasource.username=<user>
 spring.datasource.password=<password>

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

## Configuration SMTP server
You can also adjust the email configuration in one of the application.properties sub-files to be able to send emails if the user wants tp reset the password
 these configurations are like username, email and password as shown below

```java
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=<emai>
spring.mail.password=<password>.

//Other properties
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.connectiontimeout=5000
spring.mail.properties.mail.smtp.timeout=5000
spring.mail.properties.mail.smtp.writetimeout=5000

//TLS , port 587
spring.mail.properties.mail.smtp.starttls.enable=true

```



## Using RESTful API

To interact with the API, you should download an HTTP client. For this we recommend you using Postman. The following link allows you to get a collection of examples to interact with the API.

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

#### Front-end:

Home component

Contact component

About us component

Nav bar component


##

### UML system documentation
[Click here](https://gitlab.fdmci.hva.nl/se-ewa-2020-2021/digital-life-5/-/blob/master/UML%20system%20documentation.pdf)
