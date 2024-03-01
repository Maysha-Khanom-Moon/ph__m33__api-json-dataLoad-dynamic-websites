## API
- Application Programming Interface
- it's like a link that allows two applications to talk to each other
- API is the part of the server that receives requests and sends responses

### How does an API work
- an API acts like a link that allows two applications to talk to each other



## JSON
- JavaScript Object Notation
- an open data interchange format that is both human and machine-readable

- #### JSON.parse
    - JSON parse to Object

- #### JSON.stringify
    - Object to JSON format



## fetch API
- The fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers

- fetch(URL) <----- get the data from the url
    .then(res => res.json()) <----- converts the data to js object
    .then(data => console.log(data)) <----- displays the js object


- fetch(url) <----- pass a response as a promise
    .then(res => rer.json()) <----- modified the response and return data as a promise
    .then(data => ...) <----- we can do anything using these data



## CRUD
- Create, Read, Update, and Delete

- #### Rest API methods
    - GET: receive information about an API resource (by defualt)

    - POST: create an API resource

    - PUT/ PATCH: update an API resource
        - PUT: total section kei overright kore
            - create a new (if doesn't exist)
            - replace the current item (if exist)
        - PATCH: just specific keys gula k update kore and baki gula as it is.

    - DELETE: delete an API resource

- client side ---request---> Server ---> DataBase
    DataBase ----> Server ----response---> client side 



## HTTP status code
- informational responses (100 - 199)
- successful responses (200 - 299)
- redirection messages (300 - 399)
- client error responses (400 - 499)
- server error responses (500 - 599)