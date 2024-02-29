// single data --> as a single object --> json format
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json()) // converts into a json promise
    .then(data => console.log(data))
}


// 10 users data --> as array of 10 objects --> json format
function loadData10() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()) // function call vulo nah!
    .then(data => displayUsers(data))
}

function displayUsers(data) {
    console.log(data);
}
