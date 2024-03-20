---
title: "Rest Öğreniyorum"
layout: post
---

## Bilesenler

* **REST Client**   : browser, postman, curl.
* **REST Service**  : server like ExpressJS for NodeJS and Django for Python.
* **REST API**      : this defines the endpoint and methods that allowed to
                      access/submit data to the server.

## REST nasil calisir?

there is an endpoint (URL) that the server is waiting for request. We connect to
that endpoint and send in some data about us, and the server responds with the
correct response.

### REST Server

ExpressJS ile GET ve POST metodları için endpoint'ler oluşturduk.

### REST Client

Server oluşturduk, peki websitesinden veya web uygulamasından buraya nasıl
ulaşabiliriz? REST client kütüphaneleri bu noktada yardımcı oluyor; form içeren
bir web sayfası hazırlayacağız, iki numara girebileceğin ve sonucu görebileceğin
bir form olacak.

Express alows us to add middlewares like body-parser to our application whith
the use method. you'll hear the term middleware a lot when dealing with Express.
These things are basically plugins that change the request or response object
before they get handled by our application.

The urlencoded method within body-parser tells body-parser to extract data from
the <form> element and add them to the body property in the request object.

now, you should be able to see everythin in the form field within the req.body object.

### Postman echo

`GET` request: retrieve the data that identified by a unique URI. `GET` request
can pass parameters to the server using "Query String Parameters"

endpoint echoes the HTTP headers, request parameters and the complete URI requested.

#### kaynaklar

> [freecodecamp](https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/)
> [freecodecamp](https://www.freecodecamp.org/news/building-a-simple-crud-application-with-express-and-mongodb-63f80f3eb1cd/)
> [postman](https://web.postman.co/workspace/My-Workspace~a7d970b0-d569-47e7-8dd5-aa622c3af48f/documentation/3414154-ac52bfa8-f49a-44a5-a1d9-b3f5f306265d)
