---
title: "How to Get All Hugo Tags"
date: 2019-03-31T10:10:28+08:00
description: "How to get all hugo tags or taxonomy or category you use for your static website"
topics: ["hugo"]
---

If you need all the tags you currently use for your website built with Hugo, you can grab it from .Site.Taxonomis.tags. You can get the Permalink directly and the name itself.

{{< highlight html >}}
<ul>
    {{ range $name, $taxonomy := .Site.Taxonomies.tags }}
        {{ with $.Site.GetPage (printf "/tags/%s" $name) }}
            <li><a href="{{ .Permalink }}">{{ $name }}</a></li>
        {{ end }}
    {{ end }}
</ul>
{{< / highlight >}}

Maybe you want to make this as your menu navigation that sticks in Homepage's header. Same code, just put an if-else clause to tell use, are we in homepage or not
{{< highlight html >}}
{{ if .IsHome }}
<nav class="tags">
    {{ range $name, $taxonomy := .Site.Taxonomies.tags }}
        {{ with $.Site.GetPage (printf "/tags/%s" $name) }}
            <li><a class="tags-{{ $name }}"  href="{{ .Permalink }}">{{ $name }}</a></li>
        {{ end }}
    {{ end }}
</nav>
{{ end }}
{{< / highlight >}}

You can also get an information about [current active tag you choose in hugo] (/how-to-get-current-tag-in-hugo/)



