---
title: "How to Create Dark Mode in Website"
description: "Learn how to create a dark mode website for your website. It's actually easier that you think"
date: 2019-03-30T09:38:40+08:00
tags: ["html", "css", "javascript"]
---

Oftentimes we see a dark mode in website, just like this one. For me personally, i can't stare too long on a bright screen, that's why i prefer dark mode for some websites. And as a developer, it's hard not to think "how is it made?".

First, we need to prepare the CSS, both for normal condition and case when it's in dark mode
{{< highlight css >}}
body{
    /*your normal styling*/
}
body.darkmode {
    background: rgb(57, 57, 57);
    color: rgb(227, 227, 227);
}
/*to toggle button*/
.is-hidden{
 display: none;    
}{{< / highlight >}}

We'll toggle the class via a button or text with javascript
{{< highlight html >}}
<div id="theme">
     <div onclick="setDarkMode(true)" id="darkBtn" class="">  <span>Dark</span></div>
    <div onclick="setDarkMode(false)" id="lightBtn" class="is-hidden"> <span>Light</span> </div>
</div> {{< / highlight >}}
script
{{< highlight js >}}
<script>
 function setDarkMode(isDark) {
        var darkBtn = document.getElementById('darkBtn')
        var lightBtn = document.getElementById('lightBtn')

        if(isDark) {
            lightBtn.style.display = "block"
            darkBtn.style.display = "none"
        } else {
            lightBtn.style.display = "none"
            darkBtn.style.display = "block"
        }

        document.body.classList.toggle("darkmode");
    }
</script> {{< / highlight >}}

And finally to make things easier for user who visit our site for N+1 times, save the theme in localstorage (web feature).
{{< highlight js >}}
<script>
 function setDarkMode(isDark) {
 //check localstorage
 if(localStorage.getItem('preferredTheme') == 'dark') {
     setDarkMode(true)
 }

 function setDarkMode(isDark) {
     var darkBtn = document.getElementById('darkBtn')
     var lightBtn = document.getElementById('lightBtn')

     if(isDark) {
         lightBtn.style.display = "block"
         darkBtn.style.display = "none"
         //add to localstorage
         localStorage.setItem('preferredTheme', 'dark');
     } else {
         lightBtn.style.display = "none"
         darkBtn.style.display = "block"
         //add to localstorage
         localStorage.removeItem('preferredTheme');
     }

     document.body.classList.toggle("darkmode");
 }
</script> {{< / highlight >}}

