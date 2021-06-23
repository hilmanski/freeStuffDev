---
title: "Create New Hugo Post Faster With Bash"
date: 2019-04-02T01:03:49+08:00
description: "How to create new hugo post faster with bash script? without writing hugo new command anymore"
topics: ["bash", "hugo", "productivity"]
---

If I can't automate a repetitive task, i always try to find a way to make it faster. One of the pain point in creating new post with hugo is we always have to type.

{{< highlight bash >}}
hugo new posts/your-new-post.md
{{< / highlight >}}

The dynamic part is only the title itself. So the idea is, i want to run a single word function + title. And i don't like to type minus sign "-" between words. That's why in this function we'll add a slugify to transform our title.

Let's make a little function script in our main bash file, For mac's user it's in ".bash_profile", open it with whatever your text editor of choice. If you haven't heard about bash, read a [quick intro about what is bash](/what-is-bash-and-how-it-can-save-your-time/)

{{< highlight bash >}}
function hugonp() {
    hugo new posts/$(echo $1 | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z.md).md
}
{{< / highlight >}}

"hugonp" is the name of the function we want to call later, you can name it whatever you want. Inside this function, we write the command we want to run with accepting "$1" as parameter of the title.  What you see  after pipe sign "|" is the filter we want to run to slugify the title. I got this trick from [codeselfstudy's post](https://codeselfstudy.com/blog/how-to-slugify-strings-in-bash/)

Example if it's "my new title" it will transform to "my-new-title"

If you run this now "hugonp my new file" there's a problem, $1 only take "my" as parameter, it ignores the rest of the worlds. That's why we have to get all the parameters and combine it as one string, here is our final script looks like

{{< highlight bash >}}
function hugonp() {
    str="$*"
    hugo new posts/$(echo $str | sed -e 's/[^[:alnum:]]/-/g' | tr -s '-' | tr A-Z a-z.md).md
}
{{< / highlight >}}







