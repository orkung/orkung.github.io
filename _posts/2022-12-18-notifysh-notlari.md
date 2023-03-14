---
title: "notify.sh servis kullanimi"
layout: post
---

curl'le desktop/android'e herhangi bir hesap vs. olusturmadan notification
gondermeye yarar. aklima gelen 2 kullanim:

* Cronjob'la birlikte zamanlayici olarak kullanilabilir.
* 2 cihaz arasinda metin gondermek icin whatsapp-mail vs.'ye ihtiyac ortadan kalkar.

android'de notification'un belirgin olmasi icin Priority de gondermek gerek

```shell
curl \
>   -H "Title: Unauthorized access detected" \
>   -H "Priority: urgent" \
>   -H "Tags: warning,skull" \
>   -d "Remote access to $(hostname) detected. Act right away." \
>   ntfy.sh/cavitdeneme
```
