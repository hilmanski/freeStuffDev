---
title: How to Create Poster With Html Canvas
date: 2019-03-30 22:14:17 +0000
description: Learn how to make a poster with html canvas, in this example we will
  make a poster for making a quoter for instagram post
topics:
- html
- javascript
- canvas
image: https://res.cloudinary.com/dr1pp4pqp/image/upload/v1553983982/blog/poster-sample.png

---
Website is more powerful that we thought, do you know it has [canvas element](https://www.w3schools.com/html/html5_canvas.asp) to draw graphics on the web? If we combine this with the ability to manipulate DOM in javascript, we can make our poster generator for our next instagram or any social media post.

For a little warm up, start by [drawing text in canvas](/how-to-draw-text-in-html-canvas/) and [drawing image in canvas](/how-to-draw-image-in-html-canvas/)

Here, we will have a nice little app to produce an image dynamically like this. (_we can save it later as an image_)

![](https://res.cloudinary.com/wegoatdev/image/upload/v1553983982/blog/poster-sample.png)

The idea, is pretty simple, i want to allow user to: enter text(quote), a logo or watermark, person's photo who said this quote, and his/her name at the bottom. The position where you want to put things is up to you.

We'll make a HTML Form, with some dynamic value we explained before:
{{< highlight html >}}
<form action="#" enctype="multipart/form-data">
<h1>Create Img via HTML Canvas</h1>

        //main quote
        <span>Text</span>
        <input type="text" id="quote" placeholder="quote of today">
    
        //the font size
        <span>Size</span>
        <input type="text" id="quote_fs" value="50" maxlength="2" size="2" placeholder="font size">
    
        //line height between quote's text
        <span>Line-Height</span>
        <input type="text" id="quote_lh" value="50"  maxlength="2" size="2" placeholder="line height">
    
        //main function to glue things together
        <button onclick="drawText(event)">Add Text</button>
        <br>
    
        //get image from "open file"
        <span>Add watermark</span>
        <input type="file" id="file" onchange="addBrand(event)">
        <br>
    
        //get image from url
        <span>People Image</span>
        <input type="url" placeholder="Url image" id="people_pic">
        <button type="button" onclick="addPhoto()"> Add Pic </button>
        <br>
    
        <span>People Name</span>
        <input type="text" placeholder="nama orang" id="people_name">
        <button type="button" onclick="addName()"> Add Name </button>
        <br>
    
        //main function to re-draw any changes without reload everything
        <button onclick="reDraw()">ReDraw</button>
    </form>
    
    <br><br>
    //here is when we want to draw the actual thing
    <canvas id="myCanvas" width="512" height="512" style="border:1px solid #000000;"></canvas>

{{< / highlight >}}

Here is how the form looks like, you can customize it however you want. We will have 2 ways to upload an image, first the watermark/logo by browse on our file machine, second for the people's image by paste a link, just so we know there are many options we can play with.

![](https://res.cloudinary.com/wegoatdev/image/upload/v1553985377/blog/Screen_Shot_2019-03-31_at_6.33.50_AM.png)

    Now the magic part, i'll also explain it more in comments.
    {{< highlight js >}}
    var canvas = document.getElementById("myCanvas")
    var ctx    = canvas.getContext("2d")
    var brandImgSrc = ''
    var PhotoImgSrc = ''
    
    //====== Draw Background ======================
    //autorun for first time, to draw blank canvas
    drawBG()
    function drawBG(){
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    //===== Draw Text/Quote ======================
    //draw text that depends on font size and line-height,
    //we already gave placeholder as init value
    function drawText(){
      var text = document.getElementById('quote').value
      var text_fs = document.getElementById('quote_fs').value
      var text_lh = parseInt(document.getElementById('quote_lh').value)
      //font settings, color and style
      ctx.font = text_fs + 'px Calibri'
      ctx.fillStyle = 'rgb(68, 68, 68)'
      ctx.textAlign = 'center'
      // ctx.fillText(text, canvas.width/2, canvas.height/2)
    
       var maxWidth = 480;
       var lineHeight = text_lh;
    
       //x and y is the starting point of drawing
       var x = canvas.width/2;
       var y = canvas.height/2 - 50;
       wrapText(ctx, text, x, y, maxWidth, lineHeight)
    
       console.log("---drawn!---")
       return false
      }

    //Redraw will call all the functions, so we don't have to reload the page
    function reDraw() { 
    	ctx.clearRect(0, 0, canvas.width, canvas.height) 
        drawBG() 
        drawText() 
        drawBrandImg() 
        addPhoto() 
        addName() 
    }

    //===== Draw Brand/ Watermark
    //read image from file and draw to canvas
    function addBrand(event) {
    	var reader = new FileReader();
    	reader.onload = function(event){
          brandImgSrc = event.target.result
          drawBrandImg()
      }
    	reader.readAsDataURL(event.target.files[0]);
    }

    function drawBrandImg() {
    	var img = new Image();
    	img.onload = function(){
    		ctx.drawImage(img, 300, 20, 180, 70);
    	}
    	img.src = brandImgSrc;
    }

    //===== Draw Photo ================
    //draw image to canvas from a link
    function addPhoto() {
      var img = new Image()
      var size = 80
      var posX = (canvas.width/2)- (size/2)
      var posY = 360
    
      img.onload = function(){
          ctx.save()
          roundedImage(posX, posY, size, size, 45)
          ctx.clip()
          ctx.drawImage(img, posX, posY, size, size)
          ctx.restore()
    	}
    
      PhotoImgSrc = document.getElementById('people_pic').value
      img.src = PhotoImgSrc
    }

    function addName(){
      var text = document.getElementById('people_name').value
      //settings
      ctx.font = '20pt Calibri'
      ctx.fillStyle = 'rgb(68, 68, 68)'
      ctx.textAlign = 'center'
      // ctx.fillText(text, canvas.width/2, canvas.height/2)
    
       var maxWidth = canvas.width/2;
       var lineHeight = 25;
       var x = canvas.width/2;
       var y = canvas.height - 35;
      wrapText(ctx, text, x, y, maxWidth, lineHeight)
    
      console.log("---drawn!---")
      return false
    }
    
    //Make our avatar in round shape automatically
    //from: https://stackoverflow.com/questions/19585999/canvas-drawimage-with-round-corners
    function roundedImage(x,y,width,height,radius){
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
    
    //===== Wrap Text  ===========================
    //How to wrap text in html canvas
    //Original Source before edited: https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';
    
        //Make y point depend on font size
        var perLine    = 4
        var lines_num  = parseInt(words.length / perLine)
        y =  y - (lines_num * 10)
        //---end
    
      for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
    
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else
            line = testLine;
      }
    
      context.fillText(line, x, y);
      return false
    }

{{< / highlight >}}


Everytime you see X or Y variable, it's the starting point to draw something, you could try to change the position of each element by playing with these vars.

[Full repo on github](https://github.com/wegoatdev/canvas-poster-quote)