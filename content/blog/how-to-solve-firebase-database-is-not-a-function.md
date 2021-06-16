+++
date = "2019-08-06T16:00:00+00:00"
description = "for new firebase user who start to play with firebase database it's possible you meet with this firebase.database is not a function error"
image = ""
tags = ["firebase"]
title = "How to solve firebase.database is not a function"

+++
For new firebase user who start to play with firebase database it's possible you meet with this firebase.database is not a function error. Even after you load the firebase app javscript file before:

    <script src="https://www.gstatic.com/firebasejs/VERSIONNUMBER/firebase-app.js"></script>

The problem is documentation for firebase realtime database and firebase firestore not state it clear enough, that you have to load another script for this funciton which is 

    <script src="https://www.gstatic.com/firebasejs/VERSIONNUMBER/firebase-database.js"></script>

same with firestore, you just have to change firebase-firestore.js

Hope it helps your problem