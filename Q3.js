// count char from a given string (case sensitive and not both )

const fun = (str, chr) => {
  let count_cs = 0;
  let count_non_cs = 0;

  for (let c of str) {
    if (c === chr) {
      count_cs += 1;
    }
    if (c.toLowerCase() === chr.toLowerCase()) {
      count_non_cs += 1;
    }
  }
  return [count_cs, count_non_cs];
};

console.log(fun("MissIssippi", "I"));

// approach 2 using Reduce

const fun2 = (str, chr) => {
  let count_cs = str.split("").reduce((accum, curr) => {
    if (curr === chr) {
      accum += 1;
    }
    return accum;
  }, 0);

  return count_cs;
};

console.log(fun2("MissIssippi", "I"));
