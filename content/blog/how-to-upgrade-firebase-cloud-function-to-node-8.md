+++
date = "2019-08-03T16:00:00+00:00"
description = "Learn how to upgrade your firebase project that using cloud function to node version 8"
image = ""
tags = ["firebase"]
title = "How to upgrade firebase cloud function to node 8"

+++
I always ignore the different version i'm using in cloud function and my local computer. My local computer use node version 8, and cloud function (my firebase project use version 6).. not until i got "server error" and other type of error for my site.

Luckily, i met this post [migrating to node 8](https://howtofirebase.com/cloud-functions-migrating-to-node-8-9640731a8acc) at medium. Let's see how to upgrade your firebase project that using cloud function to node version 8. It's very easy. Just open your /functions/package.json file

now add a new property

"engines": { "node": "8" }

i assume it will work for other node version too