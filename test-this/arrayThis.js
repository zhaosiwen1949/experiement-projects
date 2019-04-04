const array = [];

array.push(function (publication) {
  // this.length = 0;
  console.log(this);
});

array.push(function (publication) {
  console.log(`1st ${publication}`)
});

array.push(function (publication) {
  console.log(`2nd ${publication}`)
});

array.push(function (publication) {
  console.log(`3rd ${publication}`)
});

const length = array.length;
for (let i = 0; i < length; i += 1) {
  array[i]("hello");
}
