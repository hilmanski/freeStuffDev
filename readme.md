<img src="https://i.ibb.co/ZHwQF1b/Screen-Shot-2022-09-23-at-15-50-49-removebg-preview.png" width="120px"/>

## FreeStuffDev
List of free services for developer like database, hosting, authentication and other stuff.  
Check it at [freestuff.dev](https://freestuff.dev)  

I listed many tools at my private note before, why not bring it to the public?
Inspired by [other similar sites](https://freestuff.dev/tags/other-list/), suprisingly not many alternative out there, so I create my own dev-tool list to start prototyping or making a MVP.

Built with Hugo Static site generator and hosted at Netlify

## License
MIT License

## Rules
Only accept free stuff or free trial at least 1 Year.

## Contribute
Want to add new stuff?   
1a. Use this form
[Form New Stuff+](https://freestuff.dev/new-stuff)  
it will prefill some value for your github Pull Request

1b. If you're going to create file manually (not via link above):

a. Fork repo  
b. Inside your fork navigate to `content/stuff`  
c. Create here new file about service you want to add. File must have `.md` extension, i.e. `myservice.md`  
d. Use next template for content

```
+++
date = 2021-06-21T18:55:27+03:00
title = "Your service name"
link = "https://link.to.service"
thumbnail = "https://any.logo.of/service"
snippet="Service description, which will be shown under service name"
tags = ["Tag1","Tag2","TagN"]
+++ 
free feature 1
free feature 2
free feature 3
```

P.S:

- You can use any image for thumbnail, but try to avoid using small favicons(16x16) as each **image will be resized to 80x80**
- For existing tags visit https://freestuff.dev/ and open the "Filter"
- At the end write the features as one feature per line

Example with [netlify.md](https://github.com/NEK-RA/freeStuffDev/blob/main/content/stuff/netlify.md) (watch it [raw version](https://raw.githubusercontent.com/NEK-RA/freeStuffDev/main/content/stuff/netlify.md))
```
+++
date = "2021-06-15T00:00:00+00:00"
tags = ["hosting", "hosting-dynamic", "hosting-static", "serverless"]
title="Netlify"
link = "https://www.netlify.com/"
thumbnail = "https://res.cloudinary.com/wegoatdev/image/upload/v1623795952/freestuffdev/stuff/netlify.png"
snippet="An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps"
+++
Host static and serverless function
Bandwith: 100GB /month
Build Minutes: 300 Minutes /month
Websites: Unlimited
Serverless Functions: 125k per site /month
Forms: 100 /site/month
Identity: 1K /site/month
```
