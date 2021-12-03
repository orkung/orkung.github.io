---
title: "SSL Sertifika Toolari"
layout: post
---

* key file ilk satir: BEGIN RSA PRIVATE KEY

* pem file ilk satir: BEGIN ENCRYPTED PRIVATE KEY

PEM on it's own isn't a certificate, it's just a way of encoding data. X.509 certificates are one type of data that is commonly encoded using PEM.

* ubuntu'da default `/etc/ssl/private` altinda gelen `ssl-cert-snakeoil.key` ilk satiri: BEGIN PRIVATE KEY

* ubuntu'da default `/etc/ssl/certs/ altinda gelen ornek bir pem dosyasinin ilk satiri: BEGIN CERTIFICATE
