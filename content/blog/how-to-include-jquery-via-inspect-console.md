---
title: "How to Include JQuery via Inspect Console"
date: 2019-04-03T07:41:43+08:00
topics: ["jquery"]
description: "How can you include a jquery for website that didn't use it via javascript console or inspect element"
---

One day you visit a website, maybe you want to scrape something, count how many elements, or any other thing you normally do easily with javascript. Right click > Inspect > Console tab > try simple command (in this example we want to change all p tag's text)

{{< highlight js >}}
$('p').text('hey')
{{< / highlight >}}

Oops... Unfortunately the website don't have jquery! Here is how you can inject jquery via the javascript console

{{< highlight js >}}
var jq = document.createElement('script');
//You can change the JQUERY-VERSION
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type (or see below for non wait option)
jQuery.noConflict();
{{< / highlight >}}

i got this trick from ~~developer's best friend~~ [stackoverflow](https://stackoverflow.com/questions/7474354/include-jquery-in-the-javascript-console)

Now the jquery is available from "jQuery" command, if you'd rather dollar sign $ just assing it
{{< highlight js >}}
$ = jQuery
{{< / highlight >}}

The idea is, we create a new script element, and change the source attribute to jquery (or whatever library/js you need later).



