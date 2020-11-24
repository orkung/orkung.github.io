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
pyenv activate <name>
pyenv deactivate
```

### RVM eklenecek


### APT  eklenecek

