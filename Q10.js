// Count Vowel from a string

const fun = (str) => {
  let vc = 0;
  let chars = str.toLowerCase().split("");
  vc = chars.reduce((accum, elem) => {
    if (["a", "i", "e", "o", "u"].includes(elem)) {
      accum += 1;
    }
    return accum;
  }, 0);
  return vc;
};

console.log(fun("Awo0 hus sasu"));
