+++
date = "2019-04-07T09:00:00+00:00"
description = "What is created_at and update_at field in database? why do we need to add this fields in our database?"
image = ""
tags = ["database"]
title = "Why do we need to save created_at and update_at field in database"

+++
You might have seen created__at and updated__at field with time value in your database, without knowing what are they exists for.

Why do we need these both fields? i'm not sure about the history, but from my experience, it would be much easier when we want to play with data when both these fields exist. For example if you have a user table, you can see how active your user is by last time the _updated__at column changes.

It's also useful to see which of your features often used by user when you have the exact time, when the action happened.

The basic idea is always save in created__at_ column when something is newly created, and everytime something happened to this data, update the _updated__at column. For example in a User's Table, created__at_ to see when user is register, and _updated__at when the user log in or edit their profile.