+++
date = "2019-04-05T03:00:00+00:00"
description = "We need to make our blogging experience as fun and easy as possible, content management system might help us to do that"
image = "https://res.cloudinary.com/wegoatdev/image/upload/v1554258977/blog/forestry.png"
tags = ["hugo"]
title = "Using forestry as CMS for your Hugo site"

+++
We need to make our blogging experience as fun and easy as possible, content management system (CMS) might help us to archieve that.  That's why i'm searching CMS for this Hugo site, and i found [forestry](https://forestry.io/) for that.

![forestry screenshot](https://res.cloudinary.com/wegoatdev/image/upload/v1554258977/blog/forestry.png)

Go to forestry and sign up if you haven't. You can also use github/gitlab or bitbucket account. 

In Dashboard you can click "add site" to add your new static site generated (Hugo) site. You can choose static site engine that you use (Hugo, Jekyll or Vuepress), and make sure the version you chose is the same. 

Next, choose the git provider you host your repository in. It will ask for an authorization

And then we have to choose the repository where our static site live, if you use github's organization you won't see your repo directly.

(Optional) In case you use github's organization, go to that organization repo, click settings > third-party access , and search forestry to add it manually. 

After that, forestry will build everything they need and deploy it for the first time. Now you can use your GUI (User interface) from forestry to play with it. From now on, you just need to add new post from this CMS without touching Text-editor anymore, which means, writing new blog can be easily done from different devices, even you are on mobile.

### Warning

In case you need to change any static things like css, you have to  go back to your text editor, but don't forget to run "git pull" first because forestry already changed something from your repo, or you've to merge and deal with other git's issue

### Other question

"What if i'm using netlify?" Don't worry, i'm still using netlify and have no problem with the deployment process, still smooth just like before. 