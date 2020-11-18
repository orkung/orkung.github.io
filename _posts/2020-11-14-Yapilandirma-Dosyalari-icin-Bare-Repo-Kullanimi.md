---
title: "Yapılandırma Dosyaları için Bare Repo Kullanımı"
layout: post
---

Unix'te uygulamaların yapılandırma dosyaları (dotfiles) ev dizininde tutuluyor.
Bu yazıda, dosyaları git repo'sunda tutarak, farklı ortamlarda aynı ayarları
kullanmanın en basit yöntemini anlatacağım.

Bu iş için Git'in bare repo özelliğini kullanacağım. Bu yöntemle, yapılandırma
dosyalarını ayrı bir dizinde tutup, ana dizine linkleme veya başka bir yöntemle
gösterme gibi ekstra işlem yapmaya gerek kalmıyor. Bare repo kullanmanın
mantığını öğrenmek isterseniz bu yazıda güzel anlatılmış; [Using a bare Git repo to get version control for my dotfiles](https://stegosaurusdormant.com/bare-git-repo/)


```bash
git init --bare ~/.dotfiles
echo 'alias dotfiles="/usr/bin/git --git-dir=$HOME/.dotfiles --work-tree=$HOME"' >> $HOME/.bashrc && source ~/.bashrc
dotfiles config --local status.showUntrackedFiles no
dotfiles remote add origin https://github.com/$USERNAME/$REPOSITORY.git
```

1) Dosyaların git history'sinin tutulacağı bare repo'yu oluştur. \
2) Git'e snapshot olarak bare repo dizinini, history olarak da /home/orkung dizinini göster. Bunu dotfiles alias'ı olarak bashrc'ye ekle, bashrc'yi uygula. \
3) Git'e snapshot dizinindeki takip edilmeyen tüm dosyaları göstermemesini söyle. \
4) uzak repoyla bare repo'yu sync et. (uzak sunucuda bir repo oluşturmanız gerekir.) 


Dosyaları eklemeye başlayabiliriz.

```bash
dotfiles add .vimrc
dotfiles commit -m "Add vimrc"
dotfiles branch -M main
dotfiles push -u origin main
```

Şimdi herhangi başka bir makinadan veya kullanıcıdan yapılandırma dosyalarını
çekelim.

```bash
git clone \
   --separate-git-dir=$HOME/.dotfiles \
   git@github.com:$USERNAME/$REPOSITORY.git\
   dotfiles-tmp
rsync --recursive --verbose --exclude '.git' dotfiles-tmp/ $HOME/
rm -rf dotfiles-tmp
echo ".dotfiles" >> .gitignore
dotfiles checkout
dotfiles config --local status.showUntrackedFiles no
```

1) `--separate-git-dir` history ile snapshot’u farklı dizinlerde tutabilmek için
belirtiyoruz. snapshot’u dotfiles-tmp’de tutuyoruz, ihtiyacımız olan dosyaları
aldıktan sonra bu dizini sileceğiz. \
2) `.git` dizinini hariç tutarak dosyaları aldık. \
3) Artık dotfiles-tmp’le bir işimiz kalmadığından siliyoruz. \
4) Repo’ya .dotfiles dizinini almaması için.

Son olarak, yeni ortamdan yapılandırma dosyalarında yapacağımız değişiklikleri repo'ya push’layabiliriz.

```bash
dotfiles status
dotfiles add .bashrc
dotfiles commit -m ".bashrc'de duzenleme"
dotfiles push
```
