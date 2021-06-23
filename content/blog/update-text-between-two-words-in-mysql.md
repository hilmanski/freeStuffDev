+++
date = "2019-06-13T16:00:00+00:00"
description = "How to get and update text between two words in mysql. We can use the replace method and combine in with normal Where clause"
image = ""
topics = ["sql"]
title = "Update text between two words in mysql"

+++
How to get and update text between two words in mysql. We can use the replace method and combine in with normal Where clause.

For example, let's say i have a simple markdown for image before but i need to prepend a new folder name since i move the resources folder. To replace a text in "columnName" that put between \['img'\] and \['/img'\]  i use REPLACE(columnName, part text you want to change, new text you want to insert)

{{< highlight js >}}  
UPDATE tableName  
SET columnName = REPLACE(columnName, '\[img\]', '\[img\]newfolder/') WHERE columnName LIKE '%\[img\]%' AND columnName LIKE '%\[/img\]%'  
{{< / highlight >}}

You can adjust the above code with your needs, like changing the two words in between or the old and new text