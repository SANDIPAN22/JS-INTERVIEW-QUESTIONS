// Sort an Array in ascending order without using sort() built-in method

const fun = (arr) => {
  // Bubble Sort
  for (let k = 0; k < arr.length - 1; k++) {
    for (let i = 0; i < arr.length - 1 - k; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
};

console.log(fun([120, 1, 34, 3, 5, 56]));
