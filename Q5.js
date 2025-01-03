// Check Palindrome (ignoring case, special char , white space)

const fun = (str) => {
  str = str.toLowerCase();
  const filteredStrArr = str.split("").filter((elem) => {
    if (elem.match(/[0-9A-Za-z]/)) {
      return true;
    }
    return false;
  });
  console.log(filteredStrArr.reverse().join(""));
  console.log(filteredStrArr.reverse().join(""));
  return (
    filteredStrArr.reverse().join("") === filteredStrArr.reverse().join("")
  );
};

console.log(fun("A man, a plan, a canal, Panama"));
