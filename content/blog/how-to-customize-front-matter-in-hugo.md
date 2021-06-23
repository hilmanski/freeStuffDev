---
title: How to Customize Front Matter in Hugo
date: 2019-04-04 05:27:17 +0000
description: Learn how to customize you pre-defined fields in front matter in your
  hugo app
topics:
- hugo
image: https://res.cloudinary.com/wegoatdev/image/upload/v1554254942/blog/Screen_Shot_2019-04-03_at_9.28.01_AM.png

---
Slowly your Hugo app is growing, the default field you need in your front matter is not just title and date anymore, you always need to include description, tags, or any other field. Hugo provide [archetypes](https://gohugo.io/content-management/archetypes/) as our default template when creating a new content.

The default location for this is in "archetypes/posts.md" or if you want in live in your theme "themes/my-theme/archetypes/posts.md". Open this particular file and write

{{< highlight Bash >}}  
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
description: ""
tags: \[""\]
image: ""

{{< / highlight >}}

It really depend on your needs, the above code is what i currently always write when starting a new post