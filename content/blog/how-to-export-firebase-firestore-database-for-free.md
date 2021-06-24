+++
date = "2019-04-07T03:00:00+00:00"
description = "How to export firebase firestore database for free"
image = "https://res.cloudinary.com/wegoatdev/image/upload/v1554011887/blog/Screen_Shot_2019-03-31_at_1.52.06_PM.png"
topics = ["firebase"]
title = "How to export firebase firestore database for free"

+++
So far, we don't have an official and free way to import or export our data in/to firebase firestore. Of course we don't want to any unwanted accident happen, where we lose all of our data without backup.

Luckily, Dalenguyen made a node package to [import and export firestore ](https://github.com/dalenguyen/firestore-import-export)for us.   
  
How to:   
  
1\. Download serviceaccount.json from Firebase Console > Project Setting > Service Accounts  
  
2\. Clone the previous repo " git clone [https://github.com/dalenguyen/firestore-import-export](https://github.com/dalenguyen/firestore-import-export "https://github.com/dalenguyen/firestore-import-export").git "  
  
3\. Download requirements with "npm install"  
  
4\. For export  
`node export.js <your-collection-name> <sub-collection-name-(optional)>`  
  
5\. For Import  
`node import.js import-to-firestore.json date=date geo=Location`  
  
Warning for import: It will overwrite your current collection if there is a collection with that name in your Firestore.