// Write a function that returns sum of the all digits of a number

const fun = (n) => {
  let ans = 0;
  while (n) {
    ans += n % 10;
    n = Math.floor(n / 10);
  }
  return ans;
};

console.log(fun(1203));
