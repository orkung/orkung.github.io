---
title: "ntfy.sh servis kullanımı"
layout: post
tags: [notification, curl, android]
categories: [tools]
---

curl'le desktop/android'e herhangi bir hesap vs. oluşturmadan notification
göndermeye yarar. Aklıma gelen 2 kullanım yeri:

* Cronjob'la birlikte zamanlayıcı olarak kullanilabilir.
* 2 cihaz arasinda metin göndermek için whatsapp-mail vs.'ye ihtiyaç ortadan kalkar.

Android'de notification'un belirgin olması için Priority de göndermek gerek

```shell
curl                                                           \
  -H "Title: Unauthorized access detected"                     \
  -H "Priority: urgent"                                        \
  -H "Tags: warning,skull"                                     \
  -d "Remote access to $(hostname) detected. Act right away."  \
  ntfy.sh/cavitdeneme
```
