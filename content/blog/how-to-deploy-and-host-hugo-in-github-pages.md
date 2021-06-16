---
title: "How to Deploy and Host Hugo in Github Pages"
description: "How to deploy your hugo website and Host it for free in Github Pages"
date: 2019-03-30T06:45:45+08:00
tags: ["hugo"]
---
Have you heard that github offers a service to host your static site for free? well, maybe you read this and say
"How about blog website?" don't worry, now we have a static-site-generator like jekyll, hugo, etc. that make static not just "static anymore". You could make a blog or any kind of listing site with this, without always have to copy and paste every layout.

Now, let's see how i deploy my Hugo blog site to github pages, this will work for user or organization page:

1. Make sure you have a github account, sign up if you don't

2. [Install git](https://www.atlassian.com/git/tutorials/install-git) in your machine

3. Create a new repo with USERNAME.github.io

4. Connect Hugo and github

    In your Hugo folder, run "hugo" command in terminal/command-prompt to generate the public folder we want to publish. And still in command-line..
    {{< highlight Bash >}}
    cd public
    git init
    git add .
    git commit -m "first deploy"
    git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
    git push -u origin master {{< / highlight >}}
    Now you can see your hugo site by accessing "username.github.io"    

5. Automate the deployment process

    Now every time, you change something in local, you need to run above commands to deploy the code. But as a developer(lazy man) we can automate it, create a file "deploy.sh" in root hugo folder (not in public), and paste this script
    {{< highlight Bash >}}
    #!/bin/bash
    echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

    # Build the project.
    hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

    # Go To Public folder
    cd public
    # Add changes to git.
    git add .

    # Commit changes.
    msg="rebuilding site `date`"
    if [ $# -eq 1 ]
      then msg="$1"
    fi
    git commit -m "$msg"

    # Push source and build repos.
    git push origin master

    # Come Back up to the Project Root
    cd ..
    {{< / highlight >}}

    Now, everytime you make a new post or make some changes just run
    {{< highlight Bash >}}
    ./deploy.sh "with Your optional commit message" {{< / highlight >}}
Notes: it's successfully deploy our site, but don't forget we haven't make a backup for the original hugo site (the generator), to prevent any unexpected things, you can also post the root hugo file in github normally without the public folder.    