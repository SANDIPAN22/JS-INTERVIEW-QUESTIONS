// Reverse a string without using built-in method

const fun = (str) => {
  const chrs = str.split("");
  let i = 0;
  let j = chrs.length - 1;

  while (i < j) {
    [chrs[i], chrs[j]] = [chrs[j], chrs[i]];
    i += 1;
    j -= 1;
  }
  return chrs.join("");
};

console.log(fun("Hello Sandipan"));
