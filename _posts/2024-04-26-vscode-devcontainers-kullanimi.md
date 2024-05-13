---
title: "Vscode Devcontainers Kullanımı"
layout: post
comments: true
---

## Amac

containerization'da olduğu gibi; farklı ortamlarda
geliştirme yapıldığında, tüm geliştirme araçlarının lokal
makinaya kurulmaması. Devcontainers'i tercih etmenin
sağladığı avantaj ise, container içinde geliştirme yaparken
vscode'daki eklentilerden faydalanabilme.

## Kullanım Senaryolari

Bu blog bir jekyll framework'unde olusturuldugundan, en
iyisi onu kullanmak:

Command line'da:

* `Dev Containers: Clone repository in a named container
  volume` secilir.
* repo adi, branch'i, volume name'i yazilir.
* jekyll imaji, debian versiyonu secilir.
* Imaj deploy ettiginde, yasadigim bir sorunu belirteyim,
  bendeki `jekyll-sass-converter` paketiyle imajda kurulu
  gelen arasindaki versiyon farkindan oturu jekyll ayaga
  kalkmiyordu, bir kereligine mevcut paketi kaldirip
  Gemfile'dan kurarak sorun cozuldu.
* daha sonra tekrar bu ortamda calisilmak istendiginde, docker
  eklentisinden container'a sag tiklanip baslatilir,
  sonrasinda yine sag tiklanip `attach vscode` secilerek
  container ortaminda calismaya devam edilir.


### Devcontainer'in avantajlari

* Docker volume'a herhangi bir dosyayi surukle birak yaparak
  yukleyebiliyorum.
* Sidebar'da eklentiler menusu altinda container icinde
  calisan eklentileri gorebilirsiniz, github copilot
  eklentileri host vscode'dan gelirken eslint ve ruby lsp
  eklentileri imajdan geliyor, peki bu nasil oluyor?

  ![](/assets/img/devcontainer_jekyll_vscode_extensions.png)


{::comment}
En pratik kullanımı komut satırından çağırmak, tercih
ettigim komutlar:

`Dev Containers: open workspace in a container`
`Dev Containers: try a dev container sample`
`Remote Explorer: Focus on dev containers view`

windows'taki workspace'leri devcontainer icinde acmak istedigimizde dosyalari
buraya kaydediyor:

```shell
%APPDATA%\Code\User\globalStorage\
ms-vscode-remote.remote-containers\
configs\<workspace_adi>\.devcontainer
```
{:/comment}

### ileri okumalar

* [Developing inside a
  Container](https://code.visualstudio.com/docs/devcontainers/containers)
[yukaridakinin reposu](https://github.com/microsoft/vscode-docs/blob/main/docs/devcontainers/containers.md)

### Kaynaklar

* [repolar](https://github.com/search?q=org:microsoft+vscode-remote-try-&type=Repositories)