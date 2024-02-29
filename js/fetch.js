// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => console.log(response))
//       .then(response => response.json())
//       .then(json => console.log(json))


/**
 * --------- json placeholder ---------
 * ==> .json is not similar but close to JSON.parse
 * 
 * ==> fetch give some types response:
 *                              1. sathe sathe dilo as vodro baccha
 *                              2. dilo but onek late korailo ---> tai r wait korbo nah
 *                              3. shorashori reject
 * 
 * fetch(api_url)
 * .then()
 */

// by procedure
function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}