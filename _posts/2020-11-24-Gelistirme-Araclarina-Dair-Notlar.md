---
title: "Geliştirme Araçlarına Dair Notlar"
layout: post
---

Kullandığım bazı araçlara dair notlar ekleyeceğim;

#### PYENV ile python sürüm yönetimi
* pyenv
kurulum için [installer repo'su](https://github.com/pyenv/pyenv-installer), 
sanal ortamlar için [virtualenv repo'su](https://github.com/pyenv/pyenv-virtualenv)

açılış dosyalarını düzenleme;
```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bash_profile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bash_profile
```

Kullanım;
```bash
pyenv virtualenv 2.7.10 my-virtual-env-2.7.10
pyenv virtualenvs
pyenv activate my-virtual-env-2.7.10
pyenv deactivate
```

[//]: # (### RVM)
[//]: # (### APT  eklenecek)
[//]: # (APT gelistirmeleriyle yeni komutlar hayatimiza giriyor.)

### Vim 
* Yankstack
* vim-yaml-folds
  `za`: Toggle current fold
  `zR`: Expand all folds

* yeni mapping'ler atiyorsun, ancak vimrc'de bunlara atanmis baska degerler
  olup olmadigini bilmiyorsun, bu durumda `:verbose imap <key>` yazarak
  test edebilirsin.


### Linux cli
* `loginctl`: Farkli bir kullaniciyi logout etmek icin;

`loginctl` ile session id no alinir;

`sudo loginctl kill-session <session-id-no>`

### Snap
* kurulan paketleri guncellemek (bir cronjob bulamadim..)

### Tmux
sidebar Key bindings
prefix + Tab - toggle sidebar with a directory tree
prefix + Backspace - toggle sidebar and move cursor to it (focus it)

resurrect Key bindings
This plugin goes to great lengths to save and restore all the details from your
tmux environment. 

prefix + Ctrl-s - save
prefix + Ctrl-r - restore

pane'i isaretle (marked), sessionist'le baska bir session'a gonder;
```
prefix + t<secondary-key> - join currently marked pane (prefix + m) to current session/window, and switch to it
secondary-keys
h, -, ": join horizontally
v, |, %: join vertically
f, @: join full screen
```

Continuum icin systemd service'i yazmak lazim, bu konuya calisacagim.
[Systemd automatic start for tmux
](https://github.com/tmux-plugins/tmux-continuum/blob/master/docs/systemd_details.md)

### Windows
* wsl
calisan process'leri gorme ve oldurme;
```
wsl --list --running
wsil --terminate <wsl_name>
```

### SQL

Some of The Most Important SQL Commands
`SELECT` - extracts data from a database
`UPDATE` - updates data in a database
`DELETE` - deletes data from a database
`INSERT INTO` - inserts new data into a database
`CREATE DATABASE` - creates a new database
`ALTER DATABASE` - modifies a database
`CREATE TABLE` - creates a new table
`ALTER TABLE` - modifies a table
`DROP TABLE` - deletes a table
`CREATE INDEX` - creates an index (search key)
`DROP INDEX` - deletes an index

