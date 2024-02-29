/**
 * ---------- javaScript object notation (json) ----------
 * 
 * ==> JSON.stringify --> converts a js value to a json string
 */

const user = {id: 1, naem: 'Gorib Aamir', job: 'actor'};
const stringified = JSON.stringify(user);

console.log(user);
// { id: 1, naem: 'Gorib Aamir', job: 'actor' }

console.log(stringified);
// {"id":1,"naem":"Gorib Aamir","job":"actor"}


