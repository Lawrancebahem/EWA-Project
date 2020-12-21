# Deploy to Heroku

It's time to deploy your app! 

Heroku git deployment has a straightforward process consisting of two steps: 

- adding a Heroku remote repository to your repository (only once)
- pushing your commit to the Heroku remote (whenever you want to deploy the app)

Fot this workshop, we are deploying the front-end and back-end applications in distinct containers. The rationale for this choice is to demonstrate the distributed nature of this type of project. It gives room to prepare your application to separate concerns and create more loosely coupled (independent) applications. The figure below presents a deployment diagram, with both front-end and back-end applications installed in different heroku containers/apps:

![](img/0-deploy.png)

# Adding a Heroku remote repository to your EWA repository

To remind you, we are using a mono repository approach, which has many advantages, but also some necessary adjustments.

 >In EWA projects, groups have only one repository that needs to be shared between the back-end and front-end application. It means that the project should be remotely connected to both Heroku projects, one for the front-end and other for the back-end. 
 >Heroku does not work automatically for mono repositories, being necessary executing additional steps. If you have a multi repository (one repo per app), then you can just follow the steps given in the Herok dashboard from the *deploy* tab.

Here you can see the commands used to connect your repository to the front-end and back-end Heroku apps:

```
heroku git:remote -a hbo-ict-fe-app-staging -r heroku-fe-app
heroku git:remote -a hbo-ict-be-app-staging -r heroku-be-app
```

The commands above connected your repository to two remote projects of Heroku. If you run the command `git remote -v`, you will be able to see the remote addresses of Heroku:

```
$ git remote -v
heroku-be-app	https://git.heroku.com/hbo-ict-be-app-staging.git (fetch)
heroku-be-app	https://git.heroku.com/hbo-ict-be-app-staging.git (push)
heroku-fe-app	https://git.heroku.com/hbo-ict-fe-app-staging.git (fetch)
heroku-fe-app	https://git.heroku.com/hbo-ict-fe-app-staging.git (push)
origin	git@gitlab.fdmci.hva.nl:ewa2/deployment-workshop-sandbox.git (fetch)
origin	git@gitlab.fdmci.hva.nl:ewa2/deployment-workshop-sandbox.git (push)
```

You can adapt the commands above to work in your project. Note that each Heroku app has a different remote name for each app(heroku-fe-app, heroku-be-app). Thus, it is easier to push changes to the right place in the future.

## Deploying your application to Heroku from a mono repository

Heroku repository assumes a direct relationship between your repo and his remote repository. However, this is not the case when we are using a mono repository.

Thus, we should make Heroku believe that we have separate repositories. To do so, we are using a feature of git that allows splitting your project in parts. As a result, a new branch that corresponds only to a specific folder is generated, and it is used to push into the Heroku repository in the master branch.

The following list of commands are executed for deployment purposes:

```
git checkout staging
git subtree split --prefix fe-app -b splitting-staging-fe
git push --force heroku-fe-app splitting-staging-fe:master
git branch -D splitting-staging-fe
```

Let's explain the executed commands one by one:

- git checkout staging: Move to the staging branch. We assume that you will only deploy your application when there is something new in the *staging* branch. Please reserve the master branch for assessment purposes. This approach will avoid frequent deployments if you automate this part.
- git subtree split: we are creating a new branch (splitting-staging-fe) that is a subset of your git project. It contains only the 'fe-app' folder
- git push: it pushes the content of the splitting-staging-fe branch to the master branch of the remote repository heroku-fe-app. The --force option is to ignore any unrelated change that might happen remotely. Actually, we are not interested in pulling any change from this repo. Our content is the most recent and prevalent view.
- git branch -D: remove this branch as long as is not needed anymore.

You can adapt the sequence of commands to deploy the back-end app, as follows:

```
git checkout staging (maybe you are already there)
git subtree split --prefix be-app -b splitting-staging-be
git push --force heroku-be-app splitting-staging-be:master
git branch -D splitting-staging-be
```

## Checking the status of your deployment

The deployment process will start. You can follow the output in your console. You can also query the logs and check the status of your deploy in the *Activity* tab as follows:

![](img/1-console.gif)

If something goes wrong, you can see the logs of your container by using the Heroku CLI. The logs can give you important clues for troubleshooting. For example:

```
heroku logs -a [your-heroku-app]
```

## Navigation

- [Next Step: Automating the deployment of your apps using Gitlab CI/CD pipelines](/doc/general/gitlab-cicd/README.md)
- [Previous Step: Preparing your Spring Boot Application](/doc/be/README.md)
- [Home](/README.md)


