---
title: "Geliştirme Araçlarına Dair Notlar"
layout: post
---

Kullandığım bazı araçlara dair notlar ekleyeceğim;

### Python

#### PYENV ile sürüm yönetimi

kurulum için [installer repo'su](https://github.com/pyenv/pyenv-installer),
sanal ortamlar için [virtualenv repo'su](https://github.com/pyenv/pyenv-virtualenv)

* açılış dosyalarını düzenleme;

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bash_profile
```

* Kullanım;

```bash
pyenv virtualenv 2.7.10 my-virtual-env-2.7.10
pyenv virtualenvs
pyenv activate my-virtual-env-2.7.10
pyenv deactivate
```

#### Diger Python konulari

* base64 ile encode etme: girdigin karakter sayisi kadar karakter basar.

```python
 base64.b64encode(b'denememe')
 b'ZGVuZW1lbWU='
```

[//]: # (### APT  eklenecek)
[//]: # (APT gelistirmeleriyle yeni komutlar hayatimiza giriyor.)

### RVM

```bash
rvm gemset create proje_adi
rvm gemset use proje_adi
rvm use 2.7.0@proje_adi
```

### Vim

* Yankstack
* vim-yaml-folds
  `za`: Toggle current fold
  `zR`: Expand all folds
* ultisnips

[Creating Basic Snippets](https://www.youtube.com/watch?v=f_WQxYgK0Pk&feature=emb_logo)

* yeni mapping'ler atiyorsun, ancak vimrc'de bunlara atanmis baska degerler
  olup olmadigini bilmiyorsun, bu durumda `:verbose imap <key>` yazarak
  test edebilirsin.

### Linux cli

* `loginctl`: Farkli bir kullaniciyi logout etmek icin;
* `timedatectl`: sistem zamani ayarlanir

`loginctl` ile session id no alinir;
`sudo loginctl kill-session <session-id-no>`

timewarrior `timew`: incremental olarak calisilan zamanin kaydini tutmayi
saglar. Tag'ler ile hangi ise ne kadar zaman harcandigi belirtilebilir.
Backdating ozelligi ile gecmiste baslatmayi veya durdurmayi unuttugumuz
kayitlari da duzenleyebiliriz.

### Snap

* kurulan paketleri guncellemek (bir cronjob bulamadim..)

### Tmux

#### sidebar Key bindings

* `prefix + Tab` toggle sidebar with a directory tree
* `prefix + Backspace` toggle sidebar and move cursor to it (focus it)

#### resurrect Key bindings

This plugin goes to great lengths to save and restore all the details from your
tmux environment.

* `prefix + Ctrl-s` save
* `prefix + Ctrl-r` restore

pane'i isaretle (marked), sessionist'le baska bir session'a gonder;

```bash
prefix + t<secondary-key> # join currently marked pane (prefix + m) to current session/window, and switch to it
secondary-keys
h, -, ": join horizontally
v, |, %: join vertically
f, @: join full screen
```

Continuum icin systemd service'i yazmak lazim, bu konuya calisacagim.
[Systemd automatic start for tmux
](https://github.com/tmux-plugins/tmux-continuum/blob/master/docs/systemd_details.md)

#### cfssl

* sign             signs a certificate
* bundle           build a certificate bundle
* genkey           generate a private key and a certificate request
* gencert          generate a private key and a certificate
* serve            start the API server
* version          prints out the current version
* selfsign         generates a self-signed certificate
* print-defaults   print default configurations

### Windows

* coklu monitorle calisirken tek monitorden ss alma: `ctrl+alt+prntscrn`

#### wsl

* calisan process'leri gorme ve oldurme;

```bash
wsl --list --running
wsl --terminate <wsl_name>
```

* docker-desktop alpinem'mis, chroot etmek icin; `wsl -d docker-desktop`

* ram kullanimini sinirlandirma: windows Kullanicisinin ev dizininde
  `.wslconfig` dosyasina asagidakini yaz;

```bash
[wsl2]
memory=1GB
```

* update'te sorun olursa; `sudo hwclock --hctosys`

#### Git

* Working tree: you can think of a working tree as a file system.
* Index: staging area, is where commits ara prepared.

![add ve commit isleyisi](/assets/img/git_workflow.jpg)

#### CRC

* crc network'unu actiktan sonra wsl'in dns cozmesi icin crc'nin atadigi server
  ip'sini resolv.conf'a yaz
