---
title: "QEMU/KVM notlari"
layout: post
comments: true
---

```bash
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
