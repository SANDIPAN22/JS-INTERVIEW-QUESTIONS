// find out the char is upper case or lower case

const fun = (c) => {
  const ans =
    c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <= "z".charCodeAt(0)
      ? "Lower"
      : "Upper";

  return ans;
};

console.log(fun("B"));
console.log(fun("n"));
