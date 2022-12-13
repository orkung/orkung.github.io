---
title: "Gitops Ogreniyorum"
layout: post
---

How does GitOps work?

there are at least two repositories: the application repository and the
enviroment repository. the application repository contains the source code and a
Dockerfile. The enviroment repository contains all deployment manifests of the
currently desired infrastructure for the target enviroment

#### Kaynaklar

[flux](https://fluxcd.io/flux/concepts/ )