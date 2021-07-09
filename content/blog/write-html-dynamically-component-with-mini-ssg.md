---
layout: blog
title: Write HTML dynamically component with mini SSG
description: Using mini SSG to write reusable components, layout and partial
  code in HTML files
date: 2021-07-09T07:42:21.079Z
image: https://i.ibb.co/rbTBp5W/Screen-Shot-2021-07-08-at-10-27-49-AM.png
topics:
  - SSG
---




This is a story about me:  

One day, I need to make a simple static website.\
Create a folder with ONE HTML file. "index.html"

The next day, I want to add a new file "about.html",
 so I make a new file, and then copy paste all the header, footer and sidebar to make my pages consistent.

The next day, I need to add a new file again.. again.. and again. Just like before, I need to copy paste most of the part, let alone the annoying meta tag between head with all the social graph and twitter cards.

 If I need to change one simple typo in the header, I need to open all files and change it one by one.

*That's my story, does it sounds like your problem too?*

### Searching for a solution

I have two options here, \
First, use server side language, so I can have a templating system for that problem. BUT, I like static sites, there are many options to host it for free without worry too much about the security.

So we go to the next option. Using SSG (static site generator). There are so many options already with various use cases. But for making few simple sites, learning all these new syntax and concept is really overwhelming.

So I pick the hard way, as a developer myself, you know it.. make my own SSG that can fits my own need.

### Introducing Mini SSG

I built my own SSG, with my very own problem in mind. I started it with imagine how I would  use it later. I want the syntax to be very minimal and elegant. I pick the ideas from laravel blade templating system.

Mini SSG helps you write reusable html files. You can create base layout, import partial code and create component for your project.

It's a node/javascript package which you can install via NPM. More detail about [how to install is here](https://minissg.vercel.app/tour)

In this post, I just want you to take a look how minimal the syntax is.

**To import partial file**

```html
@import(header)		

<p>Your awesome content</p>

@import(footer)
```

**To use general layout we can do this**

ex: base.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>@attach(title)</title> <!-- render your title above -->
</head>
<body>
	@attach(section) <!-- render everything from section above -->
</body>
</html>
			
```

**later, to attach those part, we use @section** 

```html
@layout(base) <!-- 'base' is your html file name, could be anything -->		 

@section(title, Your Page Title)

@section
<main>
	Hey.. meet your awesome content
</main>
@endsection
			
```

We can even combine imports and general layout like this



```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>@attach(title)</title> <!-- render your title above -->
</head>
<body>
	@import(header)
	@attach(section) <!-- render everything from section above -->
	@import(footer)
</body>
</html>
			
```

Do you need a reusable dynamic component?



```html

<div>
	<div class="flex is-space-around">
		<div class="someClass">
			@attach(fullDiv)
		</div>

		<p>@attach(textOnly)</p>
	</div>	
</div>
			
```

attach it like this

```html

<h2>Other stuff</h2>

@component(story)
	@slot(fullDiv)
		<p>😀 I'm slot with name text</p>
		<p>I can be very complex element</p>
	@endslot

	@slot(textOnly)
		I can also be just text like this
	@endslot
@endcomponent
			
```

That's the preview of mini SSG package that I built, maybe you need this too :). Here is [mini SSG website's link](https://minissg.vercel.app/)