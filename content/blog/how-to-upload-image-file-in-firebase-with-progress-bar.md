+++
date = "2019-08-29T16:00:00+00:00"
description = "Learn how to upload image or any file in firebase with progress bar to show how many percent your data already uploaded"
image = ""
tags = ["firebase"]
title = "How to upload image / file in firebase with progress bar"

+++
Learn how to upload image or any file in firebase with progress bar to show how many percent your data already uploaded. First we add the upload functionality, don't forget to give it an id

    {{< highlight js >}}<input type="file" value="upload" id="uploadButton">{{< / highlight >}}

just like other firebase project you have to load the necessary firebase's js file and set the configuration, now specific for the upload part

    {{< highlight js >}}
    var storage  = firebase.storage()
    var button = document.getElementById('uploadButton')
    button.addEventListener('change', function(e){
    	var file = e.target.files[0]	
        var storageRef = storage.ref("foldername/" + file.name)
        storageRef.put(file)
    })
    {{< / highlight >}}

that's it, try to upload any fire you want, it works. But of course, there is no feedback for now, we don't really know if it successful or not. So, let's give it a nice feedback for user by showing the progress bar

    {{< highlight js >}}//add new progressbar Button
    <progress value="0" max="100" id="uploadProgress">0%</progress>
    //new javascript
    var progress = document.getElementById('uploadProgress')
    button.addEventListener('change', function(e){
    	var file = e.target.files[0]
        var storageRef  = storage.ref("foldername/" + file.name)
        var uploadTask = storageRef.put(file)
    
    	uploadTask.on('state_changed', loadUpload, errUpload, completeUpload)
          //show progress  
          function loadUpload(data){  
               var percent = (data.bytesTransferred/data.totalBytes) * 100  
               progress.value = percent  
            }
            
            //On error    
            function errUpload(err){      
            	console.log('error')      
                console.log(err)    
    		}
            
              //On success  
              function completeUpload(data){      
              	 console.log('success')      
    	          console.log(data)   
              }
        }) {{< / highlight >}} 