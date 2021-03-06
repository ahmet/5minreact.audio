---
title: "#21 - Bitbucket Pipeliens"
date: "2018-04-13"
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/429023142&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>


Today I'd like to introduce you to Bitbucket Pipelines, a continuous integration and continuous delivery cloud service that I've been using quite a lot lately. Personally, I find Bitbucket Pipelines extremely useful for several reasons...

Bitbucket pipelines I am using now: https://bitbucket.org/product/features/pipelines

Cirrus CI I am going to try next: https://medium.com/cirruslabs/introducing-cirrus-ci-a75cd1f49af0


<!-- end -->
**Transcript**

Today I'd like to introduce you to Bitbucket Pipelines, a continuous integration and continuous delivery cloud service that I've been using quite a lot lately.

The first public beta version was announced in the fall of 2016, and in the summer of 2017 the service was promoted from beta to production.

I've been experimenting with it since the end of 2017, so for now it's been just a few months.

First and foremost, Bitbucket Pipelines is a continuous integration service seamlessly connected with the Bitbucket repository storage.

Just like in all cutting-edge CI systems these days, we need to add a certain file — in this case, bitbucket-pipelines.yml — to the root of the repository, so that the tasks defined in this file can run on every push to Bitbucket. These tasks will run in Docker containers entirely within the Bitbucket server infrastructure, so you don't have to worry about setting up your own servers, agents, or workers.

Besides, any Docker image can be used as a base image, unlike, for example, in Travis CI, which, as far as I recall, offers only a limited range of base images. I've made a few of my own custom images that include all the necessary language versions, extensions and third-party tools.

To anyone who has worked with Travis or GitLab, the bitbucket-pipelines.yml file looks pretty typical and familiar. The main entity is the pipeline, attached to branches or tags in the source code. You can also use glob patterns for matching branch names and tags.

The pipeline can be organized into a set of steps. They run in order of appearance, and if any step produces an error, subsequent steps won't be executed. A step can be configured to run automatically or manually. For example Manual trigger is convenient for setting up deployment on click. Each step starts off with a clean slate as a fresh Docker container that automatically has access to all the application source code (repository is cloned into container automatically). You can pass artifacts, such as files and build or compilation results, from one step to another.

Within a step, you define tasks, which are, essentially, command line instructions. For instance, I can run:
npm ci

followed by:
npm test.

To avoid downloading npm packages again and again, the service has a caching mechanism. It provides pre-defined caches for npm and other package managers out of the box, but you could also define your own rules for caching any particular directory.

Now, what if you need a database like MySQL or PostgreSQL for testing? In terms of Bitbucket Pipelines, these are “services”. You can launch up to five additional services alongside the main container, and they will run as separate Docker containers that can be addressed by their corresponding names via the local network.

What's more, one of the services can be the Docker daemon itself, allowing you to create custom images inside of the pipeline which you can then push to Docker Hub or to a private repository.

The total RAM limit for the main container and all the additional services is 4Gb. Optionally, you can allocate twice as much memory to the build by specifying "size: 2x" in the yml file.

Private data like tokens or passwords can be stored as environment variables that you can set up via the Bitbucket web interface.

Bitbucket famously offers free private repositories for teams of 5 or less collaborators. And they can also run Pipelines for free! Although they're limited to 50 minutes a month. And it's barely enough. Even if you only run nightly scheduled builds as opposed to building on every push, you'll do 30 builds a month, which leaves less than 2 minutes for each build. In practice, launching the main container along with the MariaDB container, as well as cloning the repository and unpacking the npm cache, already takes at least 1 or 2 minutes and sometimes can slow down to 5 or 10.

Then there is the subscription plan of 1000 minutes for $10 a month, which looks much better. I set up a few of my projects and used up only 300 minutes in the first month. So I passed all my Docker image builds over to Bitbucket Pipelines, and made even better use of it.

What are the downsides? The syntax of bitbucket-pipelines.yml doesn't allow reusing your custom configuration snippets. Imagine I've described a pipeline for the master branch composed of several steps with a few dozen tasks each. What if I want to describe a similar pipeline for the staging branch where the first step is the same, and the second one is different? I have no choice but copy big chunks of configuration from the master pipeline over to the staging pipeline.

As for debugging, there is a Python script that sets up the entire environment locally, but I haven't tried it out yet. Instead, I've done live debugging, and it takes quite a while. To make life a bit easier, there is an online validator for the bitbucket-pipelines.yml file that not only fixes indentations, but also checks internal logic and parameter spelling.

Unfortunately, Bitbucket offers no build matrix system that could be handy for running tests against multiple versions of NodeJS or the database. You end up creating many pipelines that are nearly identical except for the tag in the Docker image. For those who develop libraries or out-of-the-box products, this is a living hell. But if you are testing an internal product that is meant to work with a certain version of NodeJS, you have nothing to worry about.

Inside of the Bitbucket web interface, the process of running the pipelines and analyzing the results is seamlessly integrated with the repositories. In addition, it offers integration with Slack, HipChat, and other services. Furthermore, in Sourcetree, the GUI client for Git and Mercurial also owned by Atlassian, build status is indicated right next to each commit. Sourcetree can also show system notifications whenever there is a build failure.

Personally, I find Bitbucket Pipelines extremely useful for several reasons:
- First, my configurations are quite simple, and I don't really need the full power of Jenkins or TeamCity
- I don't like hosting anything myself. Even though GitLab workers can be set up in a snap, not having to configure anything at all in my own infrastructure is a major plus for me.
- As I already keep all my source code in Bitbucket repositories, a well-integrated CI system is a real treat.
- I still use Mercurial for some projects, and Bitbucket Pipelines plays very well with it as it can clone Mercurial repositories and filter by bookmarks.
- $10 for 1000 minutes per month is both very affordable and sufficient.

If you haven't set up your continuous integration workflow yet and you keep your repositories at Bitbucket, definitely check out Bitbucket Pipelines. You can get it up and running in no time.

And if you have your own continuous integration server and supporting or updating it takes too much time and effort, Bitbucket Pipelines can be a great way to save you the trouble.

Of course, Bitbucket Pipelines isn’t the only service to meet these needs. Its most famous alternatives are Travis CI, Circle CI and GitLab CI. Recently I've also stumbled upon a new project called Cirrus CI, and it looks intriguing. Perhaps it will be the next cloud CI service I’ll turn to in case I run into any limitations with Bitbucket Pipelines.

Use Continues Integration and prosper! 
