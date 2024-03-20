---
title: "ELK Notları"
layout: post
---

## ES Query DSL

DSL: domain specific language

## Kibana

ES'in index'lediği field'lar; senin örneğin kibana > integrations'ta sample data'da eklediğin field'lar oluyor.

### Alerting

Rule types: built in (stack) rules, registered by one of kibana apps.
you can create following type of rules;

* *custom query*: query-based rule, search indices and creates alert when document match.
* *thresold*: if the thresold field is source.ip and ist value is 10, an alert
  is generated for every source ip address that appears in at least 10 of the
  rule's search results.
* *machine learning*

### Create and manage rules

```mustache
Rule {{context.rule.name}} generated {{state.signals_count}} alerts

{{#context.alerts}}
------
  Timestamp: {{@timestamp}}|{{event.created}}

  Username: {{winlog.event_data.SubjectUserName}}
  Event ID: {{winlog.event_id}}
  Event Message: {{message}}
{{/context.alerts}}
{
    "alert_id": "{{alertId}}",
    "alert_name": "{{alertName}}",
    "alert_instance_id": "{{alertInstanceId}}",
    "context_title": "{{context.title}}",
    "context_value": "{{context.value}}",
    "context_message": "{{context.message}}"
}
Elasticsearch query rule'{{rule.name}}' is active:

- Value: {{context.value}}
- Service: {{#context.hits}} {{_source.kubernetes.container.name}} {{/context.hits}}
- Error Message: {{#context.hits}} {{_source.message}} {{/context.hits}}
- Document ID: {{#context.hits}} {{_id}}  {{/context.hits}}
- Conditions Met: {{context.conditions}} over {{params.timeWindowSize}}{{params.timeWindowUnit}}
- Timestamp: {{context.date}}
```

<https://github.com/elastic/kibana/blob/main/x-pack/plugins/triggers_actions_ui/README.md>