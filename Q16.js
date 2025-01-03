// create a range of numbers using a recursive function

const fun = (a, b, arr = []) => {
  if (a > b) {
    return arr;
  } else {
    arr.push(a);
    a += 1;
    return fun(a, b, arr);
  }
};

console.log(fun(-10, 10));
