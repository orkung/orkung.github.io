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

## Kullanım

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

### ileri okumalar

* [Developing inside a
  Container](https://code.visualstudio.com/docs/devcontainers/containers)
[yukaridakinin reposu](https://github.com/microsoft/vscode-docs/blob/main/docs/devcontainers/containers.md)

### Kaynaklar

* [repolar](https://github.com/search?q=org:microsoft+vscode-remote-try-&type=Repositories)