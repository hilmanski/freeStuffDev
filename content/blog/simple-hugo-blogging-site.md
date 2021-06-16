---
title: "Simple Hugo Blogging Site"
description: "How to make a simple hugo website for blogging with tagging or category system."
date: 2019-03-30T05:43:40+08:00
tags: ["hugo"]
---

I always search for something simple for any of my problem. Just like every developer who wants to start a blog, deciding which platform to use is really hard. For me, the criteria are something hackable and fast for the reader. Luckily, I met Hugo! The claim “The world’s fastest framework for building websites” they put in their landing page is an honest slogan! I've got a very good experience so far with Hugo (I’ve tried Jekyll, Nuxt, Next).

Now I'd like to share how this site (at this time) made with Hugo. You'll learn how to create a simple blogging site with tagging system in Hugo.

### Hugo installation
For mac users just run
{{< highlight Bash >}}
brew install hugo
{{< / highlight >}}

For windows, [check this page] (https://gohugo.io/getting-started/installing)

To create a new site
{{< highlight Bash >}}
hugo new site quickstart
{{< / highlight >}}

You could add a theme just like the [getting-started guide suggests](https://gohugo.io/getting-started/quick-start/) or if you're like me, let's start making our own theme. Since I don't want to keep changing my blog's theme, instead creating a theme folder, I'll just change the layout directly.

### My theme structure
In my case, I want to make a simple blog with a tag system. It will have an index page, single post page and category page, where each of the posts will have a tag(s)
{{< highlight Bash >}}
layouts
    _default
        baseof.html
        list.html
        single.html
    partials
        header.html
        footer.html
    index.html
static
    css
        main.css
    img
    js
{{< / highlight >}}

Let's explore from our landing page, index.html, which render all the posts
{{< highlight Bash >}}
{{ define "main" }}

    <main>
        <ul id="post">
          {{ range .Pages }}
          <div class="posts">
             <h3 class="title"> <a href="{{.Permalink}}"> {{.Title}} </a></h3>
             <p class="desc">{{.Summary}}</p>

             <ul class="tags">Tags:
                 {{ range .Params.tags }}
                   <li class="tags-{{.}}"><a href="/tags/{{.}}">{{ . }}</a> </li>
                 {{ end }}
             </ul>
          </div>
          {{ end }}
         </ul>
    </main>

{{ end }}
{{< / highlight >}}

Now move to "_default" folder, which contains all our layout for the pages.
baseof.html is the page that Hugo always renders, so what we did here, is just add a header, footer and the main block.
Later we just call this baseof template everywhere. So our header and footer template will automatically be rendered.

baseof.html
{{< highlight Bash >}}
{{ partial "header.html" . }}
{{ block "main" . }} {{ end }}
{{ partial "footer.html" . }}
{{< / highlight >}}

Single.html with responsible for the single post/pages, all the id/class is optional.
{{< highlight Bash >}}
{{ define "main" }}

<section id="main">
  <h1>{{ .Title }}</h1>
  <article> {{ .Content }} </article>
</section>

//render tag and date
<aside id="meta">
    <section>
        <li> {{ .Date.Format "Mon Jan 2, 2006" }} </li>
        <ul class="tags">Tags:
            {{ range .Params.tags }}
              <li class="tags-{{.}}"><a href="/tags/{{.}}">{{ . }}</a> </li>
            {{ end }}
        </ul>
    </section>
</aside>
{{ end }}

{{< / highlight >}}

See how we wrapped all the codes inside "define main"? it comes from baseof.html!
Now move to the List page, which will responsible for our category page

{{< highlight Bash >}}

{{ define "main" }}

    <main>
        //to grab which category we're in (get by split the last URL)
        {{ $lastUrlElement := index (last 1 (split (delimit (split .URL "/") "," "") ",")) 0 }}
        <h2>{{humanize $lastUrlElement}} </h2>

        //loop all pages
        <ul id="post">
          {{ range .Pages }}
          <div class="posts">
             <h3 class="title"> <a href="{{.Permalink}}"> {{.Title}} </a></h3>
             <p class="desc">{{ .Summary }}</p>

             <ul class="tags">Tags:
                 {{ range .Params.tags }}
                   <li class="tags-{{.}}"><a href="/tags/{{.}}">{{ . }}</a> </li>
                 {{ end }}
             </ul>
          </div>
          {{ end }}
         </ul>
    </main>

{{ end }}
{{< / highlight >}}

Partials folder will contain any content that we want to use many times, just like header and footer, it could be very different for each of us

Header.html
{{< highlight Bash >}}
<!DOCTYPE html>
<html lang="id">
<head>
    <title> {{ .Title }} </title>
    <meta name="description" content="{{ if .Description }}{{ .Description }}{{ else }}{{ .Site.Params.Description }}{{ end }}" property="og:description">
    <link rel="stylesheet" href="/css/main.css">
</head>
<body>
    <header> MySite </header>

{{< / highlight >}}

Footer.html
{{< highlight Bash >}}
    <p>Just footer</p>
</body>
</html>
{{< / highlight >}}

and all other static files like js, css or images will stay in "static" folder

Finally, here is my config.yaml (or .toml) file
{{< highlight Bash >}}

baseURL : YOUR BASE URL
languageCode : en
title : main page title

params:
    description: main page description

staticDir: static

permalinks:
  posts : /:title/

summaryLength: 25
{{< / highlight >}}

With this configuration my site will be served like this
all post directly in "mysite.com/title"
all category page in "mysite.com/tags/catname"

Just run "hugo server" to see your site in action
That's it, happy blogging!

You can see the final code [here](https://github.com/wegoatdev/wegoatdev.github.io)

You can also check [how to deploy and host hugo for free here](https://wegoat.dev/how-to-deploy-and-host-hugo-in-github-pages/)