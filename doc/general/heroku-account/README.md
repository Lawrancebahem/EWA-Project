# Configuring a Heroku account

In this section, we cover the creation of a Heroku account and the instructions to download and use the Heroku CLI (command-line interface).

## Creating a Heroku account

Heroku is a container-based cloud Platform as a Service (PaaS). It allows developers to build, deploy, monitor and scale their apps without complication. 

It also has a free account, that provides enough functionalities for the majority of EWA project scenarios. Some characteristics of the free account:

- 1 account allows the creation of many applications
- The app sleeps after 30 mins of inactivity,
- 1 account has 1000 dyno hours/month
- 1 dyno hour = 1 hour site is online. Just anyone who will open your site makes it run again
- If you open site for 1 sec with 30 mins interval 10 times you will use 5 dyno hour
- There are no visitors limits
- RAM and storage are limited: see [their pricing page for more details](https://www.heroku.com/pricing)

Creating an account is straightforward. Go to [heroku.com](https://heroku.com/) and select the sign-up function. There is no need to register any credit card to use the free account.

## Downloading and using the Heroku CLI

The Heroku Command Line Interface (CLI) makes it easy to create and manage your Heroku apps directly from the terminal. It’s an essential part of using Heroku.

There are different ways of [installing the CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) it on your computer. We are selecting the most straightforward option using *npm*, since we know that as an HBO-ICT SE student, you should have it already in your machine ;-).

To do so, use the following command:

```
npm install -g heroku
```
> Note that the option -G requires privileged access. In some operating systems you should use sudo (e.g. `sudo npm install -g heroku`)

After the installation, you can log in to your Heroku account and follow the prompts to create a new SSH public key for further usage.

```
heroku login
```

The CLI saves your email address and an API token to ~/.netrc for future use. For more information, see Heroku CLI Authentication.

> The `heroku login` command will open your default browser to proceed with the authentication. If you don't have a browser (e.g. a bare terminal screen), you can use the option -i to provide user details through the console (e.g. `heroku login -i`)

In the upcoming steps, we are exploring other interesting commands of the Heroku CLI.

## Navigation

- [Next Step: Creating Heroku Apps](doc/general/heroku-project/README.md)
- [Previous Step: The basics of the deployment process of web apps](/doc/general/basics/README.md)
- [Home](/README.md)

