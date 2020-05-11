---
title: "Regolith Linux Kullanımı"
layout: post
---

Kısaca [Regolith](https://regolith-linux.org/) dağıtımından bahsetmek
istiyorum. Dağıtımı tercih etme sebebim, hiçbir ayar yapmadan, Gnome masaüstü ortamında
[i3](https://i3wm.org/) tiling window manager'i kullanmayı sağlayabilmesi.
Ancak zamanla sağladığı diğer özellikleri de sevmeye başladım. Eğer Ubuntu
kullanıyorsanız [PPA repo'su](https://regolith-linux.org/download/)nu ekleyerek
kullanmaya başlayabilirsiniz.

Kullanırken karşılaştığım bazı sorunlarla ilgili çözümlerimi paylaşmak
istiyorum; aslında doğru olan bunlarla ilgili Github'da [ilgili
repo](https://github.com/regolith-linux/remontoire)'ya issue açmak, fakat
Türkiye gibi bir ülkede yaşarken, bazı evrensel standartları görmezden
gelebiliyorum.

* Remontorie'yi çalıştırdığımda sadece keybinding penceresi geliyor, bunun
  yerine menüyü görüntüleyebilmek için;

```bash
/usr/bin/remontoire -c /etc/regolith/i3/config 2>/dev/null &
```

* Kurulumdan sonra eklediğim paketler;
```bash
sudo apt install i3xrocks-memory i3xrocks-time poppler-utils 
```

* i3bar'da layout'u görüntüleyebilmek için

