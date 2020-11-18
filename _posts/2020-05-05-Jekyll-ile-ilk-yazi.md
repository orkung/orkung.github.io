---
title: "Jekyll ile İlk Yazı"
layout: post
comments: true
---

Yeniden günlük yazmaya ve bu iş için [Jekyll](https://jekyllrb.com/)
framework'unu kullanmaya karar verdim. Jekyll'i secmemin sebepleri; 
* Geniş tema desteği
* [github-pages](https://pages.github.com/) servisi tarafından desteklenmesi
* Sayfalarda yaptığım değişikliklerin herhangi komut çalıştırmadan
  html'e render edilmesi.

[Jekyll](https://jekyllrb.com/)'i denemediyseniz, anlaşılır bir anlatım için
**jekyll-now** temasının [github
repo'suna](https://github.com/barryclark/jekyll-now) bakabilirsiniz. 

Tema olarak [Niklas Buschmann](https://niklasbuschmann.github.io/contrast/)'ın
[Contrast](https://github.com/niklasbuschmann/contrast)'ını kullandım.

### Kullanım
* **Yeni günlük yazısı eklemek için**; yazıyı \_posts dizini altına, dosya adı olarak şu formatta ekliyoruz; `$(date +%F)-gunluk-yazisi-adi.md`
* **Yeni sayfa eklemek için**; ana dizinde; `sayfa-adi.md` dosyası oluşturuyoruz. Anasayfadaki menüde görünmesi için \_config.yml'da `navigation:` altına `sayfa-adi.md` dosyasını ekliyoruz.
* Her oluşturduğumuz dosyanın başına, uygun [Front Matter](https://jekyllrb.com/docs/front-matter/)'i ekliyoruz.
* Sitedeki tüm değişiklikleri git komutlarıyla gerçekleştiriyoruz.(add, commit, push)
* Dosyaları push'lamadan önce, yaptığımız değişiklikleri yerel makinamızdan izlemek için; `Jekyll gem`'ini kurup (`gem install --user jekyll`) ana dizinde `jekyll serve` çalıştırıp [127.0.0.1:4000](http://127.0.0.1:4000) adresine gidebiliriz.

### Yapılacaklar
* SEO Tag'larını ekleme.
* Disqus plugin'i ekleme.
* [Twitter Blog Duyurucu](https://blog.selcukcihan.com/web-development/twitter-blog-duyurucu/) eklenecek.
