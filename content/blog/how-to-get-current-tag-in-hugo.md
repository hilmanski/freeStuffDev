---
title: "How to Get Current Tag in Hugo"
date: 2019-03-30T10:09:07+08:00
description: "How to get current active tag or taxonomy in hugo website? it is the same way you got the last part of the url, wait, i found a simpler one"
tags: ["hugo"]
---

When i'm working on this hugo website, i struggle how to get the current tag or taxonomy. ~~Unfortunately i didn't find any straightforward solution for this~~.

*Update! now i found a very simple one*
{{< highlight js >}}
{{.Title}}
{{< / highlight >}}
Yes! just use title, i can't believe how much time i spend to figure this out. Well, sometimes the answer is right in front of us, always look for much simpler solution.

### The first solution i implemented (Hard Way)
There's a nice little hack by [gohugohq](https://gohugohq.com/howto/get-last-part-from-url-hugo/). The idea is to get the last part of the url, let's say my structure is like this
"site.com/tags/html" if we want to grab the "html" part:
{{< highlight js >}}
{{ $lastUrlElement := index (last 1 (split (delimit (split .URL "/") "," "") ",")) 0 }}
{{< / highlight >}}

Example usage
{{< highlight js >}}
{{ $lastUrlElement := index (last 1 (split (delimit (split .URL "/") "," "") ",")) 0 }}
<h2>{{humanize $lastUrlElement}} </h2>
{{< / highlight >}}
humanize is a function to turn the first letter to a capital