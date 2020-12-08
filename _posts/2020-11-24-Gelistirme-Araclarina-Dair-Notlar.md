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

### Linux cli
* `loginctl`: Farkli bir kullaniciyi logout etmek icin;

`loginctl` ile session id no alinir;

`sudo loginctl kill-session <session-id-no>`

[//]: # (hayat devam ediyor ve bu hayati zenginlestirecek bir deneyim)
[//]: # (bu test ortami cok sukur iyi oldu)