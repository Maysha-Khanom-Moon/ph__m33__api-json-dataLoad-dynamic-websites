/**
 * ---------- javaScript object notation (json) ----------
 * 
 * ==> JSON.stringify --> converts a js object to a json string
 *      ==> for number, null, undefined, true, false there is no "". otherwise all are wrap via ""
 * 
 * ==> JSON.parse --> converts a json string to original js object
 */

const user = {id: 1, naem: 'Gorib Aamir', job: 'actor'};
const stringified = JSON.stringify(user);
const userObj = JSON.parse(stringified);

console.log(user);
// { id: 1, naem: 'Gorib Aamir', job: 'actor' }

console.log(stringified);
// {"id":1,"naem":"Gorib Aamir","job":"actor"}

console.log(userObj);
// { id: 1, naem: 'Gorib Aamir', job: 'actor' }


// again
const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}

const jsonShop = JSON.stringify(shop);

console.log(shop);
console.log(jsonShop);

