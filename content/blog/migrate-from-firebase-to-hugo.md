+++
date = "2019-10-05T16:00:00+00:00"
description = "I want to migrate my firebase site (data stored in firestore) to Hugo posts. The problem is hugo made with files not database per se. Here is how i convert or migrate from firebase to hugo markdown to create post"
image = ""
tags = ["database", "firebase", "hugo"]
title = "Migrate from firebase to Hugo"

+++
I want to migrate my firebase website, which data stored in firestore, to Hugo post. The problem is hugo made with files not database per se. So there is no direcy way to export and import from firebase firestore file to hugo markdown files

Here is how i convert or migrate from firebase to hugo markdown to create post. The step is:

* Export database from firestore
* Run script to generate markdowns

**Export database from firestore**

Luckily we don't have to do this ourself, Dalenguyen made a nodejs package for us to use, here is [firebase import export](https://github.com/dalenguyen/firestore-import-export)

Tweak the exported json file a little bit, to this format (in this example i just use title and desc, feel free to add other datas)

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

**Write go script**

After exported the database, now create "main.go" file and add this code

{{< highlight go >}}

    package main
    
    import (
        "fmt"
        "os"
        "io"
        "io/ioutil"
        "encoding/json"
        "strings"
         "time"
    )
    
    type Blogs map[string]Blog
    
    type Blog struct{
        Title string `json:"title"`
        Slug string `json:"slug"`
        Subject string `json:"desc"`
        Tag string `json:"tag"`
        Time `json:"created_at"`
    }
    
    type Time struct{
        Seconds int `json:"_seconds"`
    }
    
    func main() {
        // Open jsonFile
        jsonFile, err := os.Open("./tak-blog.json")
    
        if err != nil {
            fmt.Println(err)
        }
        defer jsonFile.Close()
    
        //convert to byte
        jsonByte, _ := ioutil.ReadAll(jsonFile)
    
        var blogs Blogs
        json.Unmarshal(jsonByte, &blogs)
    
        for _, blog := range blogs {
            //metaData add double quote
            title := "\"" + blog.Title + "\""
            description := "\"" + cutText(blog.Subject) + "\""
            tag   := "\"" + blog.Tag + "\""
            created_at := "\"" + convertTime(blog.Time.Seconds) + "\""
    
            slug  := blog.Slug
            subject := blog.Subject
    
            //markdown file structure
            text := "+++\n" +
                    "title = "+ title + "\n" +
                    "description = "+ description + "\n" +
                    "date = "+ created_at + "\n" +
                    "tag = "+ tag + "\n" +
                    "+++ \n" +
                    subject
    
            if err := WriteStringToFile(slug +".md", text); err != nil {
              panic(err)
            }
        }
    }
    
    //write string to a file
    func WriteStringToFile(filepath, s string) error {
    	fo, err := os.Create(filepath)
    	if err != nil {
    		return err
    	}
    	defer fo.Close()
    
    	_, err = io.Copy(fo, strings.NewReader(s))
    	if err != nil {
    		return err
    	}
    	return nil
    }
    
    //convert seconds time to markdown format
    func convertTime(seconds int) string {
        timeRaw := time.Unix(int64(seconds), 0)
        timeNew := strings.Split(timeRaw.String(), " ")
        date := timeNew[0]
        return date +"T"+ timeNew[1] + "+00:00"
    }
    
    //to make meta descrption that limited to 120 chars
    func cutText(text string) string {
        text = strings.Replace(text, "\n", "", -1)
        if len(text) < 120 {
            return text
        } else {
            rune := []rune(text)
            return string(rune[0:120])
        }
    }

{{< / highlight >}}

Make sure the data types in struct model meets with your need.

Now run the script "go run main.go", all files will be created, now just copy paste it to your hugo site

This code also [available on github](https://github.com/hilmanrdn/Firebase-json-to-Hugo-markdown-files) to tweak