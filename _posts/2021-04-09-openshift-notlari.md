---
title: "Kubernetes & Openshift Notları"
layout: post
---

```bash
oc get po -o custom-columns=NAME:.spec.containers[0].name,NODE:.spec.nodeName,POD_IP:.status.podIP,HOST_IP:.status.hostIP
NAME        NODE        POD_IP        HOST_IP
golang-ex   compute-1   10.128.2.15   192.168.50.14
NAME      NODE     POD_IP         HOST_IP
adminer   <none>   100.127.9.78   172.31.227.26
```

Project Egress IP: 172.31.

## Workarounds

Deployment'ta configmap'ten bir dosyayi okurken asagidaki hatayi verirse aktif policy'lere bakilir:

`Forbidden! Configured service account doesn't have access. Service account may have been revoked. configmaps "example" is forbidden: User "system:serviceaccount:\<proje_adi\>:\<kullanici_adi\>" cannot get resource "configmaps" in API group`

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

## CRC

* node'a login olma:

```bash
ssh -i ~/.crc/machines/crc/id_rsa core@"$(crc ip)"
Red Hat Enterprise Linux CoreOS 49.84.202112162103-0
  Part of OpenShift 4.9, RHCOS is a Kubernetes native operating system
  managed by the Machine Config Operator (`clusteroperator/machine-config`).
```

* insufficient memory&cpu

```bash
crc config set cpus 10
crc config set memory 14867
crc delete and crc start -p ~/Downloads/pull-secret.txt --log-level debug
```

<!-- [//]: # (#### Metrics deployment) -->
[//]: # (```ansible ansible-playbook [-i </path/to/inventory>]
[//]: # <OPENSHIFT_ANSIBLE_DIR>/playbooks/openshift-metrics/config.yml -e
[//]: # openshift_metrics_install_metrics=True -e
[//]: # openshift_metrics_hawkular_hostname=hawkular-metrics.example.com```)
[//]: # (### Setting limit ranges)

## Docs

### Requests and limits

when you specify a resource *request* for containers in a pod, the scheduler
uses this information to decide which node to place thep pod on (pod'daki
konteyner icin resource request yaptiginda, scheduler bu bilgiyi, pod'u hangi
node'da ayaga kaldiracagina karar vermek icin kullanir.)

the kubelet also reserves at least the  *request* amount of that system resource
specifically fot that container to use. (kubelet en az request edilen kadar
kaynagi konteyner icin rezerve eder.)

### Configure Liveness, Readiness and Startup Probes

The kubelet uses liveness probes to know when to restart a container.  The
kubelet uses Readiness probes to know when a container is ready to start
accepting traffic... One use of this signal is to control which pods are used as
backends for Services. When a pod is not ready, it's removed from Service load
balancers.

The kubelet uses startup probes to know when a container application has
started. This can be used to adopt liveness checks on slow starting containers,
avoiding them getting killed by the kubelet before they are up and running.

* `initialDelaySeconds`: The time, in seconds, after the container starts before
  the probe can be scheduled. The default is 0.
* `periodSeconds`: The delay, in seconds, between performing probes. The default
  is 10. This value must be greater than timeoutSeconds.
* `timeoutSeconds`: The number of seconds of inactivity after which the probe
  times out and the container is assumed to have failed. The default is 1.
  konteynerin down oldugu, probe'un zaman asimina ugradigi durumda inaktif
  kalacak sure.
* `successThreshold`: The number of times that the probe must report success
  after a failure to reset the container status to successful. The value must be
  1 for a liveness probe. The default is 1.
* `failureThreshold`: The number of times that the probe is allowed to fail. The
  default is 3. After the specified attempts:
  * for a liveness probe, the container is restarted
  * for a readiness probe, the pod is marked Unready
  * for a startup probe, the container is killed and is subject to the pod’s
    restartPolicy

#### Notlar

* HPA tanimlanmasi resource quota'dan yemiyor.

#### Annotations

* fields managed by a declarative configuraton layer. Attaching these fields as
  annotations distinguishes them from default values set by clients or servers,
  and from auto-generated fields and fields set by auto-sizing or auto-scaling
  systems.

### Using ConfigMaps as files from a Pod

4 different ways that you can use a ConfigMap

1. Inside a container command and args
2. Environment variables for a container
3. Add a file in read-only volume, for the application to read
4. Write code to run the pod that uses Kubernetes API to read a ConfigMap

#### serviceAccount

* it is for process whihc run in pods.
* are namespaced

[//]: # (Kubelet Konfigürasyon)

#### HPA

* Resource requests should be close to the average usage of the pods.

[//]: # (task: metric server'dan average usage'i cek)

#### RBAC

RBAC systems can be used to define who can access what based on user identities.

* **User Accounts vs. Service Accounts**

In Kubernetes, RBAC policies can be used to define the access rights of human
users (or groups of human users). Kubernetes identifies human users as user
accounts. However, RBAC policies can also govern the behavior of software
resources, which Kubernetes identifies as service accounts.

The RBAC API declares four kinds of Kubernetes object:

* Role: A Role always sets permissions within a particular namespace; when you
  create a Role, you have to specify the namespace it belongs in.
* ClusterRole: ClusterRole, by contrast, is a non-namespaced resource.
* RoleBinding: A rolebinding grants the permissions defined in a role to a user or set of
  users. It holds a list of subjects (*users, groups, or service accounts*) and a
  reference to the role being granted.
* ClusterRoleBinding: A RoleBinding grants permissions within a specific
  namespace whereas a ClusterRoleBinding grants that access cluster-wide

* **step by step**

* create user
* create role (which verb this role grants)
* create rolebinding (bind role to a user, in order to allow user to perform
  given role)

## Kind

Set kubectl context to "kind-wslkind"
You can now use your cluster with:
kubectl cluster-info --context kind-wslkind
Kubernetes master is running at https://127.0.0.1:35449
CoreDNS is running at https://127.0.0.1:35449/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy

[kaynak](https://kubernetes.io/blog/2020/05/21/wsl-docker-kubernetes-on-the-windows-desktop/)

* `kubectl`'de olup `oc`'de olmayan komut: `kubectl top pod <podname>`
* cpu unit: 974m, '1' memory unit: "100Mi", 1000Gi, 2Gi

## k8s service accounts

k8s does not have objects whihc represent normal user accounts. normal users
cannot be added to a cluister through an API call. they need to go through
access control processes to get added to the cluster.

though a normal user cannot be added via an API call, any user that presents a
valid certificate signed by the cluster's certificate authority is considered
  authenticated. There is no username concept in the k8s.

in contrast, service accounts are users managed by k8s API. they're bound to
specific namespaces, and created automatically by the API server or manually
through API calls. Each service account is associated with a secret, and each
secret has a token. And that particular token is used for authentication.

kubeconfig contains user & corresponding cluster list itself. there are three
sections in this yaml file; *clusters*, *contexts*, *users*.

```shell
openssl req       \
  -new            \
  -key orkun.key  \
  -out orkun.csr  \
  -subj "/CN=Orkun Gunay/O=Devops"

openssl x509      \
  -req            \
  -in orkun.csr   \
  -CA ca.crt      \
  -CAkey ca.key   \
  -CAcreateserial \
  -out orkun.crt  \
  -days 10

kubectl config set-cluster docker-desktop \
  --server=https://127.0.0.1:35449        \
  --certificate-authority=ca.crt          \
  --embed-certs=true

kubectl config set-credentials orkun      \
  --client-certificate=orkun.crt          \
  --client-key=orkun.key                  \
  --embed-certs=true

kubectl config set-context dev            \
  --cluster=docker-desktop                \
  --namespace=devops                      \
  --user=orkun
```
