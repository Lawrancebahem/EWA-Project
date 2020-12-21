# Automating the deployment of your apps using Gitlab CI/CD

GitLab offers a continuous integration service. For each commit or push to trigger your CI pipeline, you must:

- Add a `.gitlab-ci.yml` file to your repository's root directory.
- Ensure your project is configured to use a [runner](https://docs.gitlab.com/ee/ci/quick_start/README.html#configuring-a-runner).


The pipeline appears under the project's CI/CD > Pipelines page. If everything runs OK (no non-zero
return values), you get a green checkmark associated with the commit. This makes it easy to see
whether a commit caused any of the tests to fail before you even look at the job (test) log. 

For this tutorial, we are deploying each application in a separate container. More specifically, the front-end application will have a distinct network address. The same for the back-end application, having its REST-API endpoints accessible from another distinct address.

We have chosen this approach to show the distributed nature of the web-apps: front-end applications are loosely-coupled to the back-end application, having a well-defined interface (RESTFul services/HTTP). Advanced features like scaling, load-balancing, usage of reverse and forward proxies are out of the scope of this tutorial.

## Configuring the Heroku API Key

We need our account credentials to allow pushing the content to the remote Heroku repository. To avoid specifying user and password in configuration files, we are using an access token provided by Heroku.

You can find the token from the Heroku dashboard, by clicking on the logged user icon (top-right) and select *Account Settings*. Please scroll down to find the *API Key* section and click on the *reveal* button to get the token string. Copy the token to the clipboard.

Now, go to your gitlab project. In the left-hand side menu, go to Settings > CI/CD and scroll down until you find the *Variables* section. Click on the expand button and add a variable called *HEROKU_API_KEY* with the token value. Of course, you can choose your preferred name to be used in the ci/cd script. You can assume the default values for other fields.

## What is a .gitlab-ci.yml file?

The .gitlab-ci.yml file is where you configure what CI does with your project. It lives in the root of your repository.

On any push to your repository, GitLab will look for the .gitlab-ci.yml file and start jobs on runners according to the contents of the file, for that commit.

This workshop does not cover all features of this file. If you want to know more advanced features, you can access [this documentation](https://gitlab.fdmci.hva.nl/help/ci/quick_start/README#creating-a-gitlab-ciyml-file).

## Creating a .gitlab-ci.yml file.

The code below is a pipeline with a single-stage called *deploy*. The stage has two variations: one for the front-end called deploy_fe and other for the back-end, called deploy_be. 

```
stages:
    - deploy

deploy_be:    
    stage: deploy
    only:
        refs:
            - staging
        changes:
          - "be-app/**/*"  
    script:
        - git remote rm heroku-be-app || true
        - git remote add heroku-be-app https://heroku:$HEROKU_API_KEY@git.heroku.com/hbo-ict-be-app-staging.git || true
        - git subtree split --prefix be-app -b splitting-staging-be
        - git push --force heroku-be-app splitting-staging-be:master
        - git branch -D splitting-staging-be

deploy_fe:    
    stage: deploy
    only:
        refs:
            - staging
        changes:
          - "fe-app/**/*"  
    script:
        - git remote rm heroku-fe-app || true
        - git remote add heroku-fe-app https://heroku:$HEROKU_API_KEY@git.heroku.com/hbo-ict-fe-app-staging.git || true
        - git subtree split --prefix fe-app -b splitting-staging-fe
        - git push --force heroku-fe-app splitting-staging-fe:master
        - git branch -D splitting-staging-fe
```

Both stages only work for commits to the staging branch. It also filters changes in a specific folder. For example, a pipeline starts for the back-end only if there are changes in the be-app folder. 

The script section is similar to the one presented in the section that explains how to deploy the application to Heroku manually. It has indeed, two additional steps to update the remote repo of Heroku to the project. This is because this script runs in an arbitrary runner, that might be running the command for the first time, and would not have the Heroku repository configures.

## Monitoring the pipeline executions

You can monitor the executions of pipelines and underlying jobs through the CI/CD option, present in the left-hand side menu:

![](img/monitor.png)

From this area, you can get details of the underlying execution and see all the deployment logs. Some interesting statistics and charts are also available in the Analytics section:

![](img/analytics.png)

## Limitations

At the time of writing of this tutorial, the gitlab environment of HBO-ICT has a small set of runners. It means that pipelines are enqueued if there are no runners available, which can slow down the process if there are too many pipelines running. We are monitoring the usage of this feature, and if needed, more runners can be added.

You can also configure runners for your EWA group where your projects are located. A runner does not consume too many resources from your computer and can also help other colleagues deploying their app.

To configure runners, you can follow [these instructions](https://gitlab.fdmci.hva.nl/help/ci/quick_start/README#configuring-a-runner).

## Navigation

- [Next Step: Configuring a database for your back-end application](/doc/db/README.md)
- [Previous Step: Manually Deploying your App to Heroku](/doc/general/deploy-to-heroku/README.md)
- [Home](/README.md)