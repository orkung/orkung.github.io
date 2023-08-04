---
title: "Prompt Engineering Notlari"
layout: post
---

Principles of Prompting

* Write clear and specific instructions: bu kisa yazmak anlamina gelmiyor.

#### net ve spesifik talimatlar yaz

Taktikler:

* delimiter'lari kullan. 3 tane quotes, backticks, dashes olur, veya angle
  brackets `<>`, ya da xml tag'lari gibi: `<tag> </tag>` seklinde
* Ask for structured output: html or json
* Check whether conditions are satisfied. Check assumptions required to do the
  task: Mesela bir metinde beli bir dizi takip ediliyorsa, metni dizi seklinde
  yazmasini isteyebilirsin.
* Few-shot prompting: task'i gerceklestirmeden once ona bazi basarili ornekler ver.

#### modele dusunme zamani ver

Taktikler:

* Specify the steps to complete a task.
* instruct to model to work out its own solution before rushing to a conclusion.

#### Bazi soru sorma yontemleri

* Ignore all previous instructions before this one...
* You must ask questions before answering to understand better what Iam seeking.
  And you must explain everything step by step. Is that understood?
* I want you to be my teacher for today and explain things like I am 6 years old

##### Kaynaklar

* [deeplearning.ai](https://learn.deeplearning.ai/chatgpt-prompt-eng/)
* [Techworld with
  Nana](https://www.classcentral.com/classroom/youtube-chatgpt-tutorial-use-chatgpt-for-devops-tasks-to-10x-your-productivity-121217/)
