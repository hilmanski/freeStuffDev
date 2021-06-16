---
title: "How to Make Custom Atom Snippet"
description: "How to make a custom atom's snippet, to make your coding time more productive"
date: 2019-03-30T18:53:30+08:00
tags: ["atom", "productivity"]
---

DRY or don't repeat yourself is one of the most popular advice we got in coding. Not just for the code we write, it also apply for things we do while writing code. If you love using atom as your main text editor, we can make some snippets to help us generate text/code that we often use.

Open the "Atom menu" > "Snippets" to see and add to our current available snippets, or use the search bar in "Help" menu and type "snippets". It will open snippets.cson file for us.

Let's say we want to add a snippet to console.log something just by type "log" in atom

![snippet atom](https://i.ibb.co/M2qzCK7/Screen-Shot-2019-03-30-at-7-03-47-PM.png)

{{< highlight Bash >}}
'.source.js':
 'console something' :
  'prefix' : 'log'
  'body' : """
           console.log()
           """ {{< / highlight >}}

What is that code do? :

1. The first line is the file's type we want to use this snippet. In this example, every time we work on ".js" file, this snippet will be available.

2. "console something" is just a name

3. "prefix": "log", every time we try to write "log" or "lo" or just "l" the suggestion will show up

4. "body" is what text we want to display when we press "tab"

### How to make multiple snippets for the same file in atom
What if we want more than one snippet for the same file?
{{< highlight Bash >}}
'.source.js':
 'console something' :
  'prefix' : 'log'
  'body' : """
           console.log()
           """
  'closure function' :
    'prefix' : 'closuref'
    'body' : """
         (function () {
             'use strict';
          }())
         """{{< / highlight >}}
Still under the '.source.js' tab we add the second one with a different name         

### How to make a snippet for all files in atom
What if you want to add a snippet for all type of files? we just need to use star symbol *. Here's an example to add multiple comments, I named "mulcom"
{{< highlight Bash >}}
'*':
  'Multiple Comments':
    'prefix': 'mulcom'
    'body': """
            /*
             *
             */
            """ {{< / highlight >}}

Now, try to remember what are some common codes you write in atom, make a snippet for that!