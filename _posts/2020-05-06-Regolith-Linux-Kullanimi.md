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

* Tekrar masaüstü kullanmak;
Tiling window manager kullanmaya başladığımdan beri hayatımdan masaüstü kavramı
çıkmıştı. Ubuntu 20.04 Focal ile tekrar masaüstü kullanma imkanına kavuştum.
masaüstüne duvar kağıdı koymak kullanıma görsellik katıyor, ayrıca PWA
kısayollarını da çağırmada kolaylık sağlıyor.
Kullanma pratiğim; masaüstünü scratchpad'e atıyorum, gerektiğinde çağırıyorum.
Açılışta aktif olması ve wallpaper atayabilmek için aşağıdaki ayarları yapmak
gerekiyor;
```bash
gsettings set org.gnome.gnome-flashback desktop true
echo "gnome.wallpaper: RESIM_DOSYASI" >> ~/.config/regolith/Xresources
xrdb -merge ~/.config/regolith/Xresources 
```

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
```bash
sudo apt install i3xrocks-keyboard-layout
```
layout gecisleri icin `alt-super-backspace`


