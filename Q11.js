// write  a function that return sum of the squares of all the digits of an array of number

const fun = (arr) => {
  let ans = arr.reduce((accum, elem) => accum + elem ** 2, 0);
  return ans;
};

console.log(fun([1, 2, 3]));
