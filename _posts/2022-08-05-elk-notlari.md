---
title: "ELK Notlari"
layout: post
---

## ES Query DSL

DSL: domain specific language

## Kibana

ES'in index'ledigi field'lar senin ornegin kibana > integrations'ta sample data'da ekledigin field'lar oluyor.

### Alerting

Rule types: built in (stack) rules, registered by one of kibana apps.
you can create following type of rules;

* *custom query*: query-based rule, search indices and creates alert when document match.
* *thresold*: if the thresold field is source.ip and ist value is 10, an alert
  is generated for every source ip address that appears in at least 10 of the
  rule's search results.
* *machine learning*
