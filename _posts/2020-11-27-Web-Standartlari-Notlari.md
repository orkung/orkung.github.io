---
title: "Web Standartlari Notlari"
layout: post
---

#### CSS Syntax
```
selector    value
|            |
p { color: blue;}
      |
    property
```
`selector types:` bu sekilde klasifiye edilerek daha genis bir gruba deger
atayabiliyoruz;

```bash
type - class - id - descendant - universal - child - adjacent sibling - attribute
```

#### type selectors
A selector which selects elements in the document's object model (DOM)
  - h1
  - body
  - td
  - br
  - p

#### class selectors
applies a style to an element having the specified class attribute. More than
one element may have the same class. specified with '.' before the class name

only one class attribute can be specified per HTML element
to define a style that will be used by all HTML elements

Note: The DOM defines a standard for accessing documents:
The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

### The DOM Programming Interface

In the DOM, all HTML elements are defined as *objects*.
The programming interface is the properties and methods of each object.

A *property* is a value that you can get or set (like changing the content of
an HTML element)

A *method* is an action you can do (like add or deleting HTML element)

The following example changes the content (the innerHTML) of the <p> element
with id="demo":

Asagidaki ornekte id'si demo olan p elementinin degerini degistirecegiz Deger
degistirmek icin id elementinin `.innerHTML` *property'siyle* degerini degistirecegiz. 
`.getElementById` *method'uyla* id'yi bulacagiz.

```html
<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "Hello World"
</script>
```


Not: Belirsiz bir sureligine bu yaziya devam edemeyecegim. 
