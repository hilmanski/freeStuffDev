---
title: How to Schedule Post in Future for Hugo
date: 2019-04-01 01:46:10 +0000
description: How to set hugo post schedule in the future with netlify and cron task
topics:
- hugo
- tool
image: https://res.cloudinary.com/wegoatdev/image/upload/v1554076813/blog/Screen_Shot_2019-04-01_at_7.00.16_AM.png

---
As i mentioned in previous post, [i move my website from github-pages to Netlify](/move-my-hugo-site-from-github-pages-to-netlify/) , so i can set a schedule for my Hugo post in future.

How to:

* in "Netlify" Menu settings > Build and deploy > check "build hooks" section, click "Add build Hook" button.

![](https://res.cloudinary.com/wegoatdev/image/upload/v1554076813/blog/Screen_Shot_2019-04-01_at_7.00.16_AM.png)

* This will generate a unique url, when we send request post to this link, it will build our site from the repository.
* Create a cron job for this. "What's cron?" it's a task that we want to run automatically. In this example, we'll run a cron task every X times to send a post request to our previous generated link
* There are many cron job services outthere, one of them is [cron-job.org](https://cron-job.org). Just sign up > @dashboard click at crobjobs tab > + create cronjob
* @Cronjob.org You need to paste the generated link before. Set schedule as you want and save it.
* @Cronjob.org At this point, it's just a GET Request, but what we need is POST. So, click edit on the task you created before, go to the "advanced" section and change the request to POST
* Finally you can test this by creating a new post with date/time set in the future. Wait until your cron run it and see your scheduled post is nicely there!

What's the reason why you want to do this? for me, when i'm in the zone and write a lot of blog posts in one day, i don't want to overwhelmed the reader by reading everything at once. Keep it nice and calm, so i'll publish it one by one. It's also useful when you are on a trip or vacation, but still want to keep updating your site automatically.