# About

<img src="https://i.ibb.co/ZHwQF1b/Screen-Shot-2022-09-23-at-15-50-49-removebg-preview.png" width="120px"/>


## FreeStuffDev
List of free services for developers like database, hosting, authentication and other stuff.  
Check it out at [freestuff.dev](https://freestuff.dev). 

I had many tools in my private repository and thought, *why not bring them to the public?* So, I created my own dev-tool list to help start prototyping or building an MVP. Built with Astro.


## Rules
1. We accept free stuff or free trial at least 1 Year.
2. If the tool only offers a 7-day trial or not having a free offer at all, let's mark it as `isPaid: true` on the `frontMatter`.
3. What is not suitable on this site:   
   - We're not accepting language/framework specific tools. 
   - Link to "part of specific tools" for example "themes for hugo"
   - Library for a certain framework/language, (e.g. Javascript library). 
   - Link to Documentation or Forum of a certain tool

They're great, but there are more suitable places for those tools.

## Contribute
Want to add new stuff?   
1a. Use this form
[Form New Stuff+](https://freestuff.dev/submit)  
it will prefill some value for your github Pull Request

1b. If you're going to create file manually (not via link above):

a. Fork repo  
b. Inside your fork navigate to `src/content/tools`  
c. Create a new file for service you want to add. File must have `.md` extension, i.e. `myservice.md`  
d. Use next template for content

```
---
title: "Your service name"
link: "https://link.to.service"
thumbnail: "https://any.logo.of/service"
snippet: "Service description, which will be shown under service name"
tags: ["Tag1","Tag2","TagN"]
createdAt: 2021-06-21T18:55:27+03:00
---
free feature 1
free feature 2
free feature 3
```

P.S:

- You can use any image for thumbnail, but try to avoid using small favicons(16x16) as each **image will be resized to 80x80**
- For existing tags visit https://freestuff.dev/ and open the "Filter"
- At the end write the features as one feature per line

## Sponsors
- [Codehooks.io](https://codehooks.io?ref=freestuffedv) - Build and deploy flexible APIs with integrated database in minutes.

## Code of Conduct
FreeStuffDev is open for contribution from all people around the world. Whoever your are and whatever your background: nationality, gender, religion, we welcome you. Things to keep in mind:
- Show empathy
- Be patient
- Accept constructive feedback

If you have any questions, feel free to open an issue or reach out at [twitter](https://twitter.com/hilmanski)

## Contributors
<a href="https://github.com/hilmanski/freeStuffDev/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hilmanski/freeStuffDev" />
</a>

## License
MIT License
