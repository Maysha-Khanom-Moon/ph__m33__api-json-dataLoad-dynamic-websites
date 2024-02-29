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


- fetch(url) <----- pass a response as promise
    .then(res => rer.json()) <----- modified the response and return data as promise
    .then(data => ...) <----- we can do anything using these data