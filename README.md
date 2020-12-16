# digital-life-5

This documentation aims at covering the deployment 
process of a typical EWA web application composed by the front-end app and the back-end app. 
For this workshop, we are using [Heroku](https://www.heroku.com/platform). 
It is a platform as a service (PaaS) based on a managed container system, for deploying and running apps.

## Objectives

* Understand the basics of the deployment process of web apps
* Use an existing cloud platform to deploy your application
* Create a basic deployment pipeline

## Prerequisites

* You should have a mono repository with a front-end and a back-end application as sub-folders. This is a typical setup of EWA projects. You should have maintainer or owner access to the project.

> A mono repository hosts more than one type of application, and folders are used to differentiate applications. For example, having a *fe-app* folder for a front-end and a be-app folder for a *back-end* application. A multi repository approach, on the other hand, has one specific repository per project. There are lots of debates and long discussions on this topic (mono repositories versus multi repositories): To know more about the differences between these techniques, take a look [at this article](https://dl.acm.org/doi/10.1145/3328433.3328435) from ACM.

The workshop is organised, following this sequence:

1. [The basics of the deployment process of web apps](doc/general/basics/README.md)
2. [Configuring a Heroku account](doc/general/heroku-account/README.md)
3. [Creating Heroku Apps](doc/general/heroku-project/README.md)
4. [Preparing your Angular Application](doc/fe/README.md)
5. [Preparing your Spring Boot Application](doc/be/README.md)
6. [Manually Deploying your App to Heroku](doc/general/deploy-to-heroku/README.md)
7. [Automating the deployment of your apps using Gitlab CI/CD pipelines](doc/general/gitlab-cicd/README.md)
8. [Configuring a database for your back-end application](doc/db/README.md)

## Running Example

Both the front-end (fe-app) and back-end (be-app) applications are accessible through these addresses:

- [Front-end](https://hbo-ict-fe-app-staging0.herokuapp.com/)
- [Back-end](https://hbo-ict-be-app-staging0.herokuapp.com/rest/banks)

>For the sake of simplicity during the demo, this pipeline is linked to the master branch. However, we strongly recommend you linking your deployment pipeline to another branch (e.g. staging)

Let's get started!
