---
title: "Gitops Ogreniyorum"
layout: post
---

## How does GitOps work?

there are at least two repositories: the application repository and the
enviroment repository. the application repository contains the source code and a
Dockerfile. The enviroment repository contains all deployment manifests of the
currently desired infrastructure for the target enviroment

## Gitops cloud build

if possible, the pull-based approach should be preferred
push-based deployments: the source of the application lives inside the
application repository along with kubernetes yaml files needed to deploy the
app. whenever a developer updates the application code, the ci/cd system
triggers the build pipeline, which build the container images and updates the
environment repostiry with the new deployment manifests. it's commont to store
templates of the deployment manifests in the application repository, so the
build pipeline can use these templates to generate the actual manifests,
eventually stored in the environment repository.
changes to the environment repositoyr trigger the deployment pipeline. This
pipeline is responsible for applying all manifests in the environment repository
to the infrastructure.

push-based deployments sample for GKE
we keep the app and  env repositories seperate because they have differenct
lifecycles and uses. the main users of the app respotiry are actual humans and
this repository and this repository is dedicated to a specific application. The
main users of the env repository are automated systems, and this repository
might be shared by several applications. the env repository can have several
branches that each map to a specific environment and reference a specific
container image, whereas the app repository does not.

## kaynaklar

* [flux](https://fluxcd.io/flux/concepts/ )
* [gcloud_gitops](https://cloud.google.com/kubernetes-engine/docs/tutorials/gitops-cloud-build)