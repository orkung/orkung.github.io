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

[//]: # (#### Metrics deployment)
[//]: # (```ansible ansible-playbook [-i </path/to/inventory>]
<OPENSHIFT_ANSIBLE_DIR>/playbooks/openshift-metrics/config.yml -e
openshift_metrics_install_metrics=True -e
openshift_metrics_hawkular_hostname=hawkular-metrics.example.com```)

[//]: # (### Setting limit ranges)

### Requests and limits

when you specify a resource *request* for containers in a pod, the scheduler
uses this information to decide which node to place thep pod on
(pod'daki konteyner icin resource request yaptiginda, scheduler bu bilgiyi, pod'u hangi
node'da ayaga kaldiracagina karar vermek icin kullanir.)

the kubelet also reserves at least the  *request* amount of that system
resource specifically fot that container to use. (kubelet en az request edilen kadar
kaynagi konteyner icin rezerve eder.)

### Configure Liveness, Readiness and Startup Probes

The kubelet uses liveness probes to know when to restart a container.
The kubelet uses Readiness probes to know when a container is ready to start
accepting traffic... One use of this signal is to control which pods are used
as backends for Services. When a pod is not ready, it's removed from Service
load balancers.

The kubelet uses startup probes to know when a container application has
started. This can be used to adopt liveness checks on slow starting containers,
avoiding them getting killed by the kubelet before they are up and running.

#### Notlar

* HPA tanimlanmasi resource quota'dan yemiyor.

#### ImageStreamTag
