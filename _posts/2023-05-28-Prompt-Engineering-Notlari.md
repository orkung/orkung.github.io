---
title: "Prompt Engineering Notlari"
layout: post
---

Principles of Prompting

* Write clear and specific instructions: bu kisa yazmak anlamina gelmiyor.

## net ve spesifik talimatlar yaz

Taktikler:

* delimiter'lari kullan. Bunlar ya 3 tane quotes, backticks, dashes olur, veya angle brackets `<>`, ya da xml tag'lari olur: `<tag> </tag>` seklinde
* Ask for structured output: html or json
* Check whether conditions are satisfied. Check assumptions required to do the task: Mesela bir metinde beli bir dizi takip ediliyorsa, metni dizi seklinde yazmasini isteyebilirsin.
* Few-shot prompting: task'i gerceklestirmeden once ona bazi basarili ornekler ver.

## modele dusunme zamani ver

Taktikler:

* Specify the steps to complete a task.
* instruct to model to work out its own solution before rushing to a conclusion.

## Kaynaklar

* [deeplearning.ai](https://learn.deeplearning.ai/chatgpt-prompt-eng/)
