// find factorial

const facto = (n) => {
  if (n < 0) return -1;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return n * facto(n - 1);
};

console.log(facto(5));
