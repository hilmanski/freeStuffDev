---
layout: blog
title: How to backup database or Laravel App
description: Learn How to backup database on Laravel App. Remember to always
  backup your database, never underestimate what happen tomorrow
date: 2021-04-22T07:05:31.079Z
image: /img/uploads/screen-shot-2021-04-22-at-3.12.12-pm.png
tags:
  - laravel
---
Never underestimate what might happen tomorrow. No one know when your app got hacked or when you accidentally do something wrong with your production database.

ALWAYS BACKUP.

If you use laravel as backend framework, good news, the company Spatie already make one package for use to backup our laravel app or our database. Here is the repo [Spatie Laravel-Backup](https://github.com/spatie/laravel-backup)

Later, we just need to run the command

```
php artisan backup:run
```

and done! of course you can automate this task via cron job. 

Put this command at app/Console/Kernel.app

```php
protected function schedule(Schedule $schedule){
 //backup and clean backup
 $schedule->command('backup:clean')->weekly();
 $schedule->command('backup:run --only-db')->twiceDaily(11, 23)->timezone('Asia/Singapore');
}
```

You can adjust the command with your need. Above command will run the cleaning weekly (remove old database at your storage) depend on your setting and run only database backup twice daily with specific timezone.

Checkout [the documentation](https://spatie.be/docs/laravel-backup/v7/introduction) for more info