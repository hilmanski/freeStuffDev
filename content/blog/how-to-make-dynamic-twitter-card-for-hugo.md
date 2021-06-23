---
title: How to Make Dynamic Twitter Card for Hugo
date: 2019-04-04 02:26:14 +0000
topics:
- hugo
description: Hot to make a nice dynamic twitter card in Hugo to optimize our twitter
  post
image: https://res.cloudinary.com/wegoatdev/image/upload/v1554176110/blog/Screen_Shot_2019-04-02_at_11.27.21_AM.png

---
Let's see how to make a nice dynamic twitter card in Hugo to optimize our twitter post, so it will show us an image, summary and other relevant information when we share it on twitter.

I'm sure you have a partial header somewhere in your Hugo blog, where you put HTML <head> tag inside. Open that file, and let's attach this meta information

{{< highlight html >}}
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="YOURSITENAME" />
<meta name="twitter:creator" content="YOURNAME" />
<meta property="og:url" content="{{ .Permalink }}" />
<meta property="og:title" content="{{ if eq .Kind "taxonomy" }}{{ .Title }} | YourSite {{ else }}{{ .Title }}{{ end }}" />
<meta property="og:description" content="{{ if .Description }} {{ .Description }} {{ else }} {{ .Site.Params.Description }} - {{ .Title }} {{ end }}" />
<meta property="og:image" content="{{if .Params.image}}{{.Params.image}}{{else}}YourDefaultImage{{end}}" />
{{< / highlight >}}

It's safe to put this on the main file. Since we set a dynamic rule for some meta information.

* Permalink will get our current page automatically
* In title in case you have a tag/taxonomy page use above, but if you don't have one, just use {{.Title}}
* Description also will generate information depend are you in homepage or single page
* For the meta image we set an if-else case and put a default image there,

### How to make the image twitter card dynamic?

In each your post, add "image" attribute
{{< highlight Bash >}}
image: "Your-image-source.jpg"
{{< / highlight >}}

Now, everytime you or someone post your link via twitter, their followers can see your nice little [twitter card](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html)