// var Promise = require('promise');

var p = Promise.resolve();
var promise = new Promise(res => res(p));
promise.then(() => {
  console.log("await!")
});
p.then(() => {
  console.log("a");
}).then(() => {
  console.log("b");
})