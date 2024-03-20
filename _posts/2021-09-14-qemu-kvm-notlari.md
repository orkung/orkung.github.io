---
title: "QEMU/KVM Notları"
layout: post
---

* vm oluşturma

```shell
virt-install                  \
    --connect qemu:///system  \
    --virt-type kvm           \
    --name <project-name>     \
    --os-variant debian10     \
    --disk size=25            \
    --memory 1024             \
    --network=network:default \
    --check disk_size=off     \
    --cdrom <path-to-iso>
```

* vm bilgileri

```shell
sudo virsh list --all domifaddr
```

* uzak vm'deki ip:port'u lokaline yönlendir:
`ssh -f -L 127.0.0.1:8080:vm_ip:port -p22 uzak_user@uzak_host 9 sleep 3000`
