// find out largest number from an array using reduce function

const fun = (arr) => {
  //   const max = Math.max(...arr);
  const max = arr.reduce((a, c) => (a > c ? a : c), -9999);
  return max;
};

console.log(fun([12, 3, 1, 4, 45, 23]));
