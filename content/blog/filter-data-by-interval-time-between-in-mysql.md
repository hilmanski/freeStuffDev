+++
date = "2019-06-13T16:00:00+00:00"
description = "oftentimes we need to filter or select data in mysql by the interval time"
image = ""
tags = ["sql"]
title = "Filter data by interval time (between) in mysql"

+++
Oftentimes we need to filter or select data in mysql by the interval time, luckily mysql provide an INTERVAL query, here is how we do it.

For example you search for data that made in this week

{{< highlight js >}}  
SELECT * FROM \`tableName\` WHERE created_at < NOW() - INTERVAL 1 WEEK  
{{< / highlight >}}

the unit is flexible, you can change WEEK, to day, hour, month even year