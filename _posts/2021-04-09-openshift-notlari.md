---
title: "Openshift Notları"
layout: post
---

Deployment'ta configmap'ten bir dosyayi okurken asagidaki hatayi verirse:
`Forbidden! Configured service account doesn't have access. Service account may have been revoked. configmaps "example" is forbidden: User "system:serviceaccount:\<proje_adi\>:\<kullanici_adi\>" cannot get resource "configmaps" in API group`
aktif policy'lere bakilir

```bash
oc policy who-can create pod
``` 

* Kullaniciya yetki verilir

```bash
kubectl create rolebinding default-sa-view \
    --clusterrole=view \
    --serviceaccount=system:serviceaccount:<proje_adi>:<kullanici_adi> \
    --namespace=<proje_adi>
```
