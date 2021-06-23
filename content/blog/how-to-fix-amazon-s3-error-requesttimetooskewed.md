+++
date = "2019-06-12T16:00:00+00:00"
description = "Suddenly one of my s3 function i use normally got an error with message  RequestTimeTooSkewed. Here is how to fix it"
image = ""
topics = ["tool"]
title = "How to fix Amazon S3 error RequestTimeTooSkewed"

+++
Suddenly one of my s3 function i use normally got an error with message  RequestTimeTooSkewed. Here is how to fix it

In my case, i use S3 to automate my database backup with Laravel as backend with this error message:

{{< highlight js >}}  
Exception message: Could not connect to disk s3 because: exception 'Aws\\S3\\Exception\\S3Exception'

{{< / highlight >}}

It doesn't really matter what backend language do you use, as long as you got this "request time too skewed" from S3 message, you can solve this by adjust the timezone on your server

If you are using ubuntu just install ntp

{{< highlight js >}}  
sudo apt-get install ntp  
{{< / highlight >}}

and restart the server with

{{< highlight js >}}  
sudo service ntp restart  
{{< / highlight >}}