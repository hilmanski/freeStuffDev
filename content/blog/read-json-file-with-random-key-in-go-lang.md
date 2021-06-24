+++
date = "2019-10-05T16:00:00+00:00"
description = "How to read a json file that has a dynamic or random key in Go language. We'll use the map data type to solve this"
image = ""
topics = ["go"]
title = "Read json file with random key in Go Lang"

+++
I stumbled upon a case, where i should import bunch of data in JSON to convert to other thing. (I'll write about this other thing in other post). Go lang become my first language of choice, to do this. Unfortunately the data saved in json each nested in a random key. Here is how i did it

Assume your data looks like this

{{< highlight json >}}

    {    
    "0BVxYRh8MixS0mYEtZ8v":{
            "title":"the titls",
            "subject":"the subject"
    },
    "0BVxYRh8MixasdS0mYEtZ8v":{
            "title":"the titls2",
            "subject":"the subject2"
    }
    }

{{< / highlight >}}

Our Go file

{{< highlight go >}}

    package main
    
    import (
        "fmt"
        "os"
        "io/ioutil"
        "encoding/json"
        "strings"
    )
    
    type Blogs map[string]Blog
    
    type Blog struct{
        Title string `json:"title"`
        Subject string `json:"desc"`
    }
    
    func main() {
        // Open jsonFile
        jsonFile, err := os.Open("./file.json")
    
        if err != nil {
            fmt.Println(err)
        }
        defer jsonFile.Close()
    
        //convert to byte
        jsonByte, _ := ioutil.ReadAll(jsonFile)
    
         json.Unmarshal(jsonByte, &blogs)
    
        for k, v := range blogs {
        	fmt.Println("k: ", k, "v: ", v.Title)
        }
    
    
    
    }

{{< / highlight >}}