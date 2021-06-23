---
title: Free and Easy Rest API for Prototype
description: How to make an API free for prototyping your app without writing any
  backend code or setup a server
date: 2019-03-31 05:04:22 +0000
topics:
- api
- tool
image: https://res.cloudinary.com/dr1pp4pqp/image/upload/v1554010128/blog/Screen_Shot_2019-03-31_at_1.26.08_PM.png

---
Do you want to create an app, but not sure how it will go just yet? Thinking about all server setup, managing database, and other stuff is scary. Good news is, we can serve our database from API (Application Programming Interface) without configuring any server or write backend code!

### My JSON Server

![](https://res.cloudinary.com/wegoatdev/image/upload/v1554010131/blog/Screen_Shot_2019-03-31_at_1.26.59_PM.png)

We can make our own data as easy as make a JSON file and serve it from our github pages with [My JSON Server](https://my-json-server.typicode.com/)! Here is todo data example

{{< highlight json >}}
{
"todos": \[
{"id":0, "text":"bersih bersih", "completed": false},  
{"id":1, "text":"belajar", "completed": false},  
{"id":2, "text":"menyapu", "completed": false}  
\]
}
{{< / highlight >}}

How to:

1. Create a public repository in Github
2. Create a db.json file inside this repo
3. Make your API in json format inside this db.json file
4. Your API is ready in  https://my-json-server.typicode.com/USERNAME/REPO

Limitation is we only can perform "GET" data, you can test/mock other HTTP request like POST, PUT, PATCH and DELETE but it won't change the actual data itself.

### Sheety.co

What if you want a GUI (User Interface) like a spreadsheet to manage your API Data? Well, you could use Google Sheet with [Sheety](https://sheety.co/).

![](https://res.cloudinary.com/wegoatdev/image/upload/v1554010128/blog/Screen_Shot_2019-03-31_at_1.26.08_PM.png)

How to:

1. Create your new API in [google sheet](https://www.google.com/sheets/about/) the structure is the first row, would be the column's name. And you can add any data under each that column.
2. Publish it by clicking Menu File > Publish to the web
3. Choose which tab you want then Select .csv format
4. Paste the URL to [Sheety input box](https://sheety.co/) and sheety will return your API Link

## Fake Data

### Mockaroo

If you don't want to create your own data, there's also tools for that! Mockaroo let you choose how much data you want, what type of data, and much more, it's very flexible, include what format you want to export your data to

![Mockaroo](https://res.cloudinary.com/dr1pp4pqp/image/upload/v1554010126/blog/mocakro.png)

### JSONPlaceholder

It's (fake) online REST API brought by [JSONPlaceholder](https://jsonplaceholder.typicode.com/) + LowDB.
It provides us with ready to use API in case you need some data for tutorials, libraries, code samples or anything. Some sample data like blog posts, comments, todos or users are ready to use

Want to know [Where to host your website for free?](/where-to-host-website-for-free/)