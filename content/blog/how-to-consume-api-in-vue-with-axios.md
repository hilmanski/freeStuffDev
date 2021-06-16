+++
date = "2019-04-08T16:00:00+00:00"
description = "Learn how to consume and display data from an API with Axios package in Vuejs"
image = "https://res.cloudinary.com/wegoatdev/image/upload/v1554791743/blog/axios.png"
tags = ["api", "vue"]
title = "How to consume API in Vue with Axios"

+++
When playing with javascript library like Vuejs, often times we use an API, to display and consume data. There are many ways to play with API in VueJS, one of them is [Axios](https://github.com/axios/axios) . Axios itself didn't depend on VueJS, it's a standalone promise based HTTP client for the browser (any framework) and node.js.

### Initialize data from an API

To initialize data, we use "mounted" function from VueJS, since it's the first function will be called in our app.

{{< highlight html >}}

    <div id="app">
      {{ info }}
    </div>

{{< / highlight >}}

{{< highlight js >}}

    new Vue({ 
      el: '#app', 
      data () {
       return { info: null } 
      }, 
      mounted () { 
       axios.get('YOURAPISOURCE')
         .then(res => (this.info = res)) 
        } 
      })

{{< / highlight >}}

It will output all the result from our get request to the API Endpoint we declared. You can automatically get the specific value by certain key. Let's say your API endpoint has "title" and "desc" keys.

{{< highlight html >}}

    <div id="app">
       <p>{{ info.title }}</p>
       <p>{{ info.desc }}</p>
     </div>

{{< / highlight >}}

We add .data in our response

{{< highlight js >}}

    new Vue({ 
      el: '#app', 
      data () {
       return { info: null } 
      }, 
      mounted () { 
       axios.get('YOURAPISOURCE')
             .then(res => (this.info = res.data)) 
       } 
      })

{{< / highlight >}}

### Best practice for loading and error state

When using an API as data source, we can't 100% sure how fast the data will be loaded or will it always be successful or not. For better User Experience, we need to think about this case and give feedback for our user.

Axios provides catch() method, in case our request went wrong

{{< highlight js >}}

     new Vue({
      el: '#app',
      data () {
        return {
          info: null,
          loading: true,
          error: false
        }
      },
      mounted () {
        axios.get('YOURAPI')
          .then(res => {
            this.info = res.data
            this.loading = false 
          })
          .catch(error => {
            console.log(error)
            this.error = true
          })
      }
    })

{{< / highlight >}}

We add two new variables, "loading" with first data is true, it will return false when we finished load our data, to indicate the loading process. And second is "error", we assign "true" to error when there is something went wrong.

With both these variable we can prepare a nice feedback for our user

{{< highlight html >}}

    <div id="app>
        <div v-if="loading">
            Loading...
        </div>
        
        <div v-else>
        	<!-- Dipslay your data here -->
        </div>
        
        <div v-if="error">
           Sorry! something is broken
         </div>
    </div>            

{{< / highlight >}}