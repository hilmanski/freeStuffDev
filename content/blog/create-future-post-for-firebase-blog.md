+++
date = "2019-08-02T16:00:00+00:00"
description = "Let's learn how to make a scheduled, future post for your blog which made with firebase"
image = ""
topics = ["firebase"]
title = "Create future post for firebase blog"

+++
One of my favorite things this last 1 year is [firebase](http://firebase.google.com),. I create so many projects with it and ... for free!. It enable us to make static or dynamic website with all the database and authentication features. I have a blog that made with firebase and sometimes i have so many idea, but didn't want to post everything at one day. It's better to schedule some post and here is how you make one

For easier UI, rather than type the date yourself, we can easily add a date input with html5. Don't forget to give it an ID

{{< highlight js >}}  
<div class="field">  
   <input type="date" id="date_form">  
</div>  
{{< / highlight >}}

Now, when we input it to our database, we make a conditional statement to check if input date is used or not (when it's not used, it means we make the post for now, not in future)

{{< highlight js >}}  
created_at = (date_form.value) ? new Date(date_form.value) : new Date()

//later your inputs  
data = {  
 title: "title",  
  created_at: created_at  
}   
{{< / highlight >}}

That's it for the input part. Now to show only published post, we check if created_at time is smaller than now date

{{< highlight js >}}  
db.collection('blogs').orderBy('created_at', 'desc').where('created_at', '<', new Date()).get().then(snapshot => {  
//and so on

}  
{{< / highlight >}}