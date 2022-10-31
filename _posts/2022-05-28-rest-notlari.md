---
title: "Rest Ogreniyorum"
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

ExpressJS ile GET ve POST metodlari icin endpoint'ler olusturduk.

### REST Client

Server olusturduk, peki websitesinden veya web uygulamasindan buraya nasil
ulasabiliriz? REST client kutuphaneleri bu noktada yardimci oluyor; form iceren
bir web sayfasi hazirlayacagiz, 2 numara girebilecegin ve sonucu gorebilecegin
bir form olacak.

Express alows us to add middlewares like body-parser to our application whith
the use method. you'll hear the term middleware a lot when dealing with Express.
These things are basically plugins that change the request or response object
before they get handled by our application.

The urlencoded method within body-parser tells body-parser to extract data from
the <form> element and add them to the body property in the request object.

now, you should be able to see everythin in the form field within the req.body object.

#### kaynaklar

* [freecodecamp](https://www.freecodecamp.org/news/rest-api-tutorial-rest-client-rest-service-and-api-calls-explained-with-code-examples/)
* [freecodecamp](https://www.freecodecamp.org/news/building-a-simple-crud-application-with-express-and-mongodb-63f80f3eb1cd/)
