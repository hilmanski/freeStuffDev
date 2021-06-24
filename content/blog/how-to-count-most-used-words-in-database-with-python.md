+++
date = "2019-04-06T09:00:00+00:00"
description = "How to count most used words in a sentence or article with  python programming language"
image = "https://res.cloudinary.com/wegoatdev/image/upload/v1554360497/blog/python.jpg"
topics = ["python"]
title = "How to count most used words in database with python"

+++
Data is one of the hottest things during past few years, being able to get a particular information from data that you collect could be very helpful.

Here's a little script how you can get / count most common words from your database. In this case we'll be using a mysql, but you can absolutely change it to other database engine, API or any file. We're using [Collection Counter from python](https://docs.python.org/3/library/collections.html#collections.Counter)

{{< highlight python >}}

    from collections import Counter
    import mysql.connector
    
    #connect mysql database
    mydb = mysql.connector.connect(
    	host="127.0.0.1",
        user="username",
        passwd="password",
        database="namadatabase"
    )
    
    #so we can get the data by key
    cursor = mydb.cursor(dictionary=True)
    cursor.execute("SELECT column FROM table")
    
    myresult = cursor.fetchall()
    
    #combine all words in one big variable
    
    titles = ''
    for item in myresult:titles += item['title'] + ' '
      #split sentences to words
      words  = titles.split()
    
      #search 5 commond words   
      Counter  = Counter(words)
      most_words = Counter.most_common(5)
      print(most_words)

{{< / highlight >}}

In the above example we only search for 5 common words, but you can change the number inside most_common() function