---
title: "Taskwarrior Kullanimim"
layout: post
---

farkli data file'lar olustur ki is task'larinla digerleri birarada
goruntulenmesin

eisenhower matrix'ine uygun olarak her isi tag'la 
1) urgent&important: ui
2) not-urgent&important: nui
3) urgent&not-important: uni
4) not-urgent&not-important: nuni

#### Taskwarrior Android app'ten

Arayuzdeki her bir basliga ornekler yazilacak;

* Most urgent tasks
* Active tasks
* All tasks
* Blocked tasks
* Blocking tasks
* Completed tasks
* Most Details of tasks
* All details of tasks
* Few details of tasks
* Minimal details of tasks
* Newest tasks
* Oldest tasks
* Overdue tasks
* urgent and important
* not-urgent but important
* urgent but not-important
* not-urgent and not-important
* Most urgent actionable tasks
* Recurring tasks
* Shows a list of all tags used
* Unblocked tasks
* Waiting (hidden) tasks
* Custom (UAD-estimation) examples

#### Sync
* pc-mobile sync icin taskserver kurmaya gerek yok. inthe.am'dan hesap acmak
  yeterli.
* Windows 10'da hyper-v uzerindeki sanal makina ile WSL arasinda;
    - Sanaldan samba ile dizin paylastirilir. 
    - Windows'ta bu dizin network drive olarak map'lenir.
    - WSL'de `-t drvs` ile mount edilir.


#### Diger
* raporlama
  - long ile etiketleri gorebilirsin
* Add the special tag +next to a task, to boost its urgency:
  `task ID modify +next`
* proje adini degistirme;
`task project:OLD modify project:NEW`



Kaynaklar
* [Todo Lists in TaskWarrior](https://docs.slackware.com/howtos:general_admin:taskwarrior)
* [Best Practices](https://taskwarrior.org/docs/best-practices.html)
* [Durations](https://taskwarrior.org/docs/durations.html)



#### Taskwiki
* Unlem priority'i karsiliyor
* parantez ici tarih due date
* 

