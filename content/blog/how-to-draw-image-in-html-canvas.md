---
title: "How to Draw Image in Html Canvas"
date: 2019-03-31T06:00:02+08:00
description: "Let's learn how to draw an image with HTML canvas. We'll see how to upload image and draw it or browse it on our machine's library"
topics: ["html", "javascript", "canvas"]
---

Besides, [drawing text in canvas](/how-to-draw-text-in-html-canvas/), we also can add an image, whether from url link or browse any image on our library.

Regardless from which method you choose, always prepare the blank canvas
{{< highlight js >}}
var canvas = document.getElementById("myCanvas");
var ctx    = canvas.getContext("2d")

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
{{< / highlight >}}

### Draw image from file browser
Input file button for drawing image via browse library
{{< highlight html >}}
<input type="file" id="file" onchange="uploadImg(event)">

<canvas id="myCanvas" width="200" height="200">
Fallback text if  browser doesn't support the canvas el.
</canvas>
{{< / highlight >}}

Onload event, we will read the uploaded image after finished buffer. Set a global var for imagesource "imgSrc" to enable usage from any functions
{{< highlight js >}}
var imgSrc = ''

function addImg(event) {
    var reader = new FileReader();

    reader.onload = function(event){
        imgSrc = event.target.result
        drawImg()
    }

    reader.readAsDataURL(event.target.files[0]);
}

function drawImg() {
    var img = new Image();
    img.onload = function(){
        ctx.drawImage(img, 0, 0, 200, 200);
    }
    img.src = imgSrc;
}
{{< / highlight >}}

the main function is ctx.drawImage with parameters:

1. image source

2. x(horizontal) start drawing position

3. y(vertical) start drawing position

4. width of Image

5. height of image

### Draw image from link
In some cases, you prefer just paste a link and let canvas draws it for you
{{< highlight html >}}
<canvas id="myCanvas" width="200" height="200">
<input type="url" placeholder="image url" id="imgLink">
<button type="button" onclick="addImage()"> Add Pic </button>
{{< / highlight >}}

This time is much simpler, because we just have to grab the value of the pasted url

{{< highlight js >}}
function addImage() {
    var img = new Image()
    var size = 100

    img.onload = function(){
        ctx.save()
        ctx.drawImage(img, 0, 0, size, size)
    }

    PhotoImgSrc = document.getElementById('imgLink').value
    img.src = PhotoImgSrc
}
{{< / highlight >}}