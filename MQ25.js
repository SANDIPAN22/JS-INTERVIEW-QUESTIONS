// You should implement your own version of map, which can be passed an array and a callback, and will return a new array with the callback run against every element. For example:

// function map(array, callback) {
//   // add your code here
// }

// const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
// console.log(mappedArray);
// // [2, 4, 6, 8, 10];

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let e of this) {
    temp.push(cb(e));
  }
  return temp;
};

const ans = [12, 457, 33, 89, 124].myMap((e) => e * 10);
console.log(ans);
