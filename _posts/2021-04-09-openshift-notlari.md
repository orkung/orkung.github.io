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
$ oc policy add-role-to-user view system:serviceaccount:top-secret:robot
```


### Requests and limits

when you specify a resource *request* for containers in a pod, the scheduler
uses this information to decide which node to place thep pod on
(pod'daki konteyner icin resource request yaptiginda, scheduler bu bilgiyi, pod'u hangi
node'da ayaga kaldiracagina karar vermek icin kullanir.)

the kubelet also reserves at least the  *request* amount of that system
resource specifically fot that container to use. (kubelet en az request edilen kadar
kaynagi konteyner icin rezerve eder.)

#### Notlar

* HPA tanimlanmasi resource quota'dan yemiyor.
