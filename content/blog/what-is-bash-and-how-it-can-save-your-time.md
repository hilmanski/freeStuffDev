---
title: "What Is Bash and How It Can Save Your Time"
date: 2019-04-02T06:23:48+08:00
description: "Have you heard about bash? but not sure what does bash actually do? Let's see how it can save you r time.. a lot"
tags: ["bash", "productivity"]
---

Have you heard about bash (Unix shell)? but not sure what does bash actually do? Let's see how it can save your time.. a lot.

Think of bash as a little program or function(s), to do whatever tasks you normally do in your terminal/command line faster, just by calling the function's name. As always, don't repeat yourself. You have to write your code and call it later by the name of the function/variable.

### How to open/create a bash file?

If you are on windows, check Chris Hoffman's post in [how to run bash shell on windows](https://www.howtogeek.com/261591/how-to-create-and-run-bash-shell-scripts-on-windows-10/). For mac's user open your .bash_profile with whatever text editor you love. If you don't have one, just create a new file:

1. Open terminal

2. Type "cd ~" (to root) (without the double quote)

3. Type "touch .bash_profile" (touch is a command to create a new file)

4. Type "open -e .bash_profile" to open it in editor

### Basic bash example

If you find yourself write a repetitive command, for example, a laravel user will type "php artisan serve" to run a server, we can make an alias for this, by write
{{< highlight bash >}}
alias pas='php artisan serve'
{{< / highlight >}}

Next time you need a server, just type "pas" and it has the same effect as you type "php artisan serve".
Alias is a very handful way to create a simple static task. Just type
{{< highlight bash >}}
alias WHATYOUWANTTOWRITE = 'The actual command'
{{< / highlight >}}

Try to write any alias for yourself. Normally, you have to close your terminal first for the changes to take an effect.

### Dynamic value in bash function

You can also add a function with dynamic value, for example i want to add a timer to shutdown my mac
{{< highlight bash >}}
function sd(){ sudo shutdown -h +$1 }
{{< / highlight >}}

sd is the name of the command i will run later, "$1" is the dynamic part. So.. typing "sd 60" will shutdown my mac in an hour(60 minutes).

Other example in mac if you want to search something in google, you can write a function
{{< highlight bash >}}
function google() {
    str="$*"
    open -a "Google Chrome" "http://www.google.com/search?q=$str";
}
{{< / highlight >}}

Everytime you want to search via terminal, just type google search something and hit enter.
Explanation: "$*" is our way to get all words user type in (get all the parameters), we pass it to "str" variable so we can use it later.

### That's it!

For more formal description and history of bash, [wikipedia will](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) explain it for you.