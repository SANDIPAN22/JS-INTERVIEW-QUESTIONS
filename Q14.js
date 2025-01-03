// Find out Median
// Sort the array ascending
// If length is ODD then answer will be middle one
// If the length is EVEN, the answer will be avg of two middle elements

const fun = (arr) => {
  const newArr = arr.sort((a, b) => a - b);
  if (arr.length % 2) {
    return newArr[Math.floor(arr.length / 2)];
  } else {
    return (
      (newArr[Math.floor(arr.length / 2)] +
        newArr[Math.floor(arr.length / 2) - 1]) /
      2
    );
  }
};

console.log(fun([1, 2, 3, 4, 5, 6]));
