const loadComments = () => {
    // fetch promise kore j data khuje anbe
    fetch('https://jsonplaceholder.typicode.com/comments')

    // res: fetch theke pawa data then res.json() modify kore return kore
    .then(res => res.json())

    // data: modified res
    .then(data => console.log(data))

    // catch: jokhon amra data pabo nah. mane uporer 3 line a jodi genjam thake r ki!
    .catch(error => console.log(`error happend ${error}`))
}


/**
 * -------- another way --------
 * 
 * ==> fetch promise diye chole jay, opekkha kore nah. 
 * 
 * ==> Tai amra await boshabo jeno kichu ekta pawa porjonto fetch wait kore.
 * 
 * ==> abar await shudhu async function gulay kaj kore
 */
// const loadComments2 = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/comments');

//     const data = await res.json();

//     console.log(data);
// }



/**
 * ------- jokhon data pabo na ba genjam thakte pare -------
 * 
 * ==> upper 3 line k try block a rakbo
 * ==> error er jonno catch block rakhbo
 * 
 * ==> but, ai khaner catch kaj kore jokhon we do syntax error
 */

const loadComments2 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');

        const data = await res.json();
        console.log(data);
    }
    catch(err) {
        console.log(err);
        console.error('data load error');
    }
}