+++
date = "2019-08-04T16:00:00+00:00"
description = "Chrome extensions is just like other program, it's inside your computer after downloaded, so you can customize it too"
image = ""
topics = ["sharing"]
title = "How to custom style momentum chrome extensions"

+++
Do you wish to edit or customize any chrome extensions Chrome extensions is just like other program, it's inside your computer after downloaded, so you can customize it too. 

In this case i don't like the "clock" display on my momentum dash extensions. [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en) is a "new tab" view that will show a hearwarming image + quotes, with todo, quotes and other stuff. Unfortunately , i see the clock is a bit off, and i have clock information everywhere. So here is how:

**We search where it's located**

For mac User, all chrome extensions are located  in: cd \~/Library/Application Support/Google/Chrome/Default/Extensions/

**Then "cd" to momentum (based on string id)**

You can check the string id by opening Chrome > extensions information and click details, the string you see in url it's the string id. So "cd" to that folder, and "cd" once again based on the version and you'll see all files related to momentum

**Open the css folder and edit style.min.css** 

In my case, i add it to this code to the last line

    .clock{display:none !important;}