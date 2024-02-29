function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


/**
 * 1. get the container element where you want to add the new elements
 * 
 */

function displayPost(posts) {
    // 1.
    const postContainer = document.getElementById('posts-container');

    for (const i of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3 style='color: red'>User - ${i.id} </h3>
        <h4 style='color: blue'>Post: ${i.title}</h4>
        <p style='background-color: cadetblue'>${i.body}</p>
        `;

        postContainer.appendChild(div);
    }
}

loadPosts();