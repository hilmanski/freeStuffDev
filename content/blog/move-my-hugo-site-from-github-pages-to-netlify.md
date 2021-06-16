---
title: "Move My Hugo Site From Github Pages to Netlify"
date: 2019-04-01T08:02:42+08:00
description: "Today i move my static site using hugo from github-pages to netlify hosting provider"
tags: ["sharing", "hugo"]
---

Today i move my static hugo site from github-pages to netlify. I heard a lot of good things about netlify before, but github-pages seems easier to use (less complicated) for me.

### Tiny problem with github-pages
Until i found one "tiny" problem, i can't schedule my post. Since the way github-pages serves our hugo site is by looking what's inside our github public repo, we always have to deploy it manually at the exact time to trigger the changes. I start looking for answers in google, and many people suggest.. you guest it.. netlify!

Netlify has a lot of features, but the one i need right now is how to schedule post in the future, which i'll talk at another post. *It's on!* check [How to scheduled Hugo post in future](/how-to-schedule-post-in-future-for-hugo/)

###  What i did to move my hugo site to netlify:

1. I create a new repo for this, don't name it username.github.io anymore or github-pages will serve it for you as a website. (You can delete your old repo later when it's all done, just to be safe)

2. Instead of push just the public repo from our static site, we push the whole hugo project, since netlify will build/generate the static part for us. You don't have to push the "public" directory, just include it in .gitignore file to ignore this directory.

3. And to connect your repo with netlify, just follow the instruction here [Hugo Netlify doc](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/) Make sure you create netlify.toml file (just copy paste from the link) except the hugo version, check your own hugo version (by run in terminal "hugo version") so no error will show up later.

4. If(you are using custom theme) check the previous doc at the bottom

5. If it succeeds, netlify will generate custom domain for you, you can edit this to YOURNAMEORWHATEVER.netlify.com

### What about Https and custom domain?

Don't forget if you set custom domain for you github-pages before, now we have to reset it once again. Normally, after install your new netlify site, netlify will suggest to add your custom domain, if not, just go to settings > Domain management. And you'll find the detailed info there.

You may also want to redirect the netlify subdomain, just create "_redirects" file (no file type) inside your static folder, not in root!
{{< highlight Bash >}}
https://DOMAINNAME.netlify.com/* https://DOMAINNAME.com/:splat 301!
{{< / highlight >}}

For the HTTPS, netlify use let's encrypt for us automatically.

### Automate deploy with one command
Now create a deploy.sh file in your root
{{< highlight Bash >}}
#!/bin/bash
echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

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
{{< / highlight >}}

You just have to run "./deploy.sh" to push to your original repository
