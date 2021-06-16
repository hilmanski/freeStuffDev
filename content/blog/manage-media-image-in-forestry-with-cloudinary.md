+++
date = "2019-04-06T03:00:00+00:00"
description = "How to manage your static website's media like hugo via forestry with image hosting provider like cloudinary"
image = "https://res.cloudinary.com/wegoatdev/image/upload/v1554337822/blog/cloudinarybot.png"
tags = ["tool", "hugo"]
title = "Manage media/image in forestry with cloudinary"

+++
One of the shortage of using static site like Hugo compare to giant CMS like Wordpress is managing image is not that easy. Normally, you have to add it to your local folder and give a reference to your relative path. 

But storing it in our own local file is not scalable and make our hosting heavier. That's why i'm looking for a hosting asset solution, and luckily i found [cloudinary](https://cloudinary.com/) , it comes with a generous offer if you just getting started.

### Hot to use cloudinary with Forestry

I mentioned on my other post, that i use forestry now as CMS. Good news is forestry offers an easy integration with cloudinary. 

Go to your setting > Media:

* Choose cloudinary
* Where to upload (folder in your cloudinary)
* Public path where to serve this from
* And for cloudinary setting, just go to your dashboard to get all the informations you need, it's all there

![](https://res.cloudinary.com/wegoatdev/image/upload/v1554337821/blog/settingmediass.png)

When you're done with the settings, now you can start uploading your media from the Site > Media. You don't have to go to cloudinary website anymore to do this. Everything will be done in forestry. 

\+1 for Forestry, when put a type image in your front matter, it gives nice UI, to choose your image from media, as same as when editing content

![](https://res.cloudinary.com/wegoatdev/image/upload/v1554337822/blog/mediass.png)