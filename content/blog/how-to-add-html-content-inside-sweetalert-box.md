+++
date = "2019-08-01T16:00:00+00:00"
description = "Here is how you can add html content or html tag inside your sweetalert box"
image = ""
tags = ["javascript"]
title = "How to add HTML content inside sweetalert box"

+++
Before you do this, make sure you use [sweetalert version 2](https://sweetalert2.github.io/), not the first one. If you're still using the 1st version, i know you'll back up a bit. Since i'm using sweetalert boxes all over my webiste, i feel really lazy too to upgrade to 2nd version, but it's actually very easy, in most cases just use swal.fire instead just swal.

Okay.. now let's see how you can add html content inside your sweetalert box. Here is an example if i want to make 2 different inputs

{{< highlight js >}}

var htmlContent = "<input placeholder='text' class='swal2-input' id='swal-input1'>" +
                     "<input placeholder='link' class='swal2-input' id='swal-input2'>"

        swal.fire({
            title: "Put your Link",
            html: htmlContent,
            focusConfirm: false,
            preConfirm: function(){
                        textInput = $('#swal-input1').val()
                        linkInput = $('#swal-input2').val()
						//do something
                    }
        })

{{< / highlight >}}

The htmlContent variable is to hold all the html elements you want to create, by separating this in it's own variable, we can read and add things easier.

preConfirm attribute is very important, it's the function that you want to run after people submit or do something with the box