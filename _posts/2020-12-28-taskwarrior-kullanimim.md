---
title: "Taskwarrior Kullanımı"
layout: post
---

~~farkli data file'lar olustur ki is task'larinla digerleri birarada goruntulenmesin~~
Context bu islevi yerine getiriyor, farkli data file'lar projeler arasindaki
gecisi imkansiz kildigindan is yukunu arttiracaktir.

#### Using dates effectively
* `scheduled date` represents the earliest opportunity to work on task. if a task has
  a scheduled date, then once the date passes, the task is considered ready,
  and there is a ready report and a READY virtual tag for this.
* `wait date` has the effect of hiding the task from you until that date.





task'i girerken `wait` ile ready raporunda goruntulenmesini belirtirsin, bu
task'ta `wait until` olarak goruntulenir. `until` ile task'in ne zaman
silinecegini belirtirsin.

[//]: # eisenhower matrix'ine uygun olarak her isi tag'la 
[//]: # 1) urgent&important: ui
[//]: # 2) not-urgent&important: nui
[//]: # 3) urgent&not-important: uni
[//]: # 4) not-urgent&not-important: nuni
[//]: # 
[//]: # #### Taskwarrior Android app'ten
[//]: # 
[//]: # Arayuzdeki her bir basliga ornekler yazilacak;
[//]: # 
[//]: # * Most urgent tasks
[//]: # * Active tasks
[//]: # * All tasks
[//]: # * Blocked tasks
[//]: # * Blocking tasks
[//]: # * Completed tasks
[//]: # * Most Details of tasks
[//]: # * All details of tasks
[//]: # * Few details of tasks
[//]: # * Minimal details of tasks
[//]: # * Newest tasks
[//]: # * Oldest tasks
[//]: # * Overdue tasks
[//]: # * urgent and important
[//]: # * not-urgent but important
[//]: # * urgent but not-important
[//]: # * not-urgent and not-important
[//]: # * Most urgent actionable tasks
[//]: # * Recurring tasks
[//]: # * Shows a list of all tags used
[//]: # * Unblocked tasks
[//]: # * Waiting (hidden) tasks
[//]: # * Custom (UAD-estimation) examples
[//]: # 
[//]: # #### Sync
[//]: # * pc-mobile sync icin taskserver kurmaya gerek yok. inthe.am'dan hesap acmak
[//]: #   yeterli.
[//]: # * Windows 10'da hyper-v uzerindeki sanal makina ile WSL arasinda;
[//]: #     - Sanaldan samba ile dizin paylastirilir. 
[//]: #     - Windows'ta bu dizin network drive olarak map'lenir.
[//]: #     - WSL'de `-t drvs` ile mount edilir.

#### Diger
* raporlama
  - long ile etiketleri gorebilirsin
* Add the special tag +next to a task, to boost its urgency:
  `task ID modify +next`
* proje adini degistirme;
`task project:OLD modify project:NEW`

#### Arastirilacak
[//]: #task'a ileri tarihli bir `scheduled` verdiginde ready'de gorunuyor.

[//]: # ### Taskwiki
[//]: # * Unlem priority'i karsiliyor
[//]: # * parantez ici tarih due date

Kaynaklar
* [Todo Lists in TaskWarrior](https://docs.slackware.com/howtos:general_admin:taskwarrior)
* [Best Practices](https://taskwarrior.org/docs/best-practices.html)
* [Durations](https://taskwarrior.org/docs/durations.html)


