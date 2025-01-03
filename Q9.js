// shortest way to remove duplicates from an array

const fun = (arr) => {
  let newArr = [...new Set(arr)];
  return newArr;
};

console.log(fun([1, 1, 1, 3, 4, 1, 3]));
