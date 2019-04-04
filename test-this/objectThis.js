const obj = {};

obj.one = function (publication) {
  // this.length = 0;
  console.log(this);
};

obj.two = function (publication) {
  console.log(`1st ${publication}`)
};

obj.three = function (publication) {
  console.log(`2nd ${publication}`)
};

obj.four = function (publication) {
  console.log(`3rd ${publication}`)
};

for (let i in obj) {
  if (obj.hasOwnProperty(i)) {
    obj[i]("hello");
  }
}