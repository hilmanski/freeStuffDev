---
title: "How to Create Simple Pagination in Hugo"
date: 2019-04-03T14:23:13+08:00
description: "How to create simple next and previous button for your website's pagination in Hugo"
tags: ["hugo"]
---

If you start looking how to paginate your blog in Hugo, it's a very good sign 🤗 ! why? it means you take your blog seriously, you post more than once (at least 😅). Luckily, Hugo make it very simple to create a pagination

- Add pagination info in your config.yaml(.toml) file
{{< highlight Bash >}}
paginate : 12 //depend on how much post per page
{{< / highlight >}}

- Change how you loop your post with .Paginator.Pages
{{< highlight Bash >}}
{{ range .Paginator.Pages }}
    //each post
{{ end }}
{{< / highlight >}}

- Add your pagination's number!
{{< highlight Bash >}}
 {{ template "_internal/pagination.html" . }}
{{< / highlight >}}

The last snippet will gave you ready-to-use pagination number, but you also can make it look simpler, for example just the next and previous button,

{{< highlight Bash >}}
{{ if .Paginator.HasPrev }}
    <a href="{{ .Paginator.Prev.URL }}">  Prev </a>
{{ end }}
{{ if .Paginator.HasNext }}
    <a href="{{ .Paginator.Next.URL }}">  Next </a>
{{ end }}
{{< / highlight >}}

We check, if the pagination has previous or next, if exists, write any text/image your want between the "a" tag, and assign a link for it.
