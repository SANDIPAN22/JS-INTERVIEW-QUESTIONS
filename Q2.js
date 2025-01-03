// Write a function that takes one string and creates a HashTag of it
// Example
// "I love javascript" ==> #ILoveJavascript

// NOTE:
// If the string contains more than 280 words or whitespaces then return false

function createHashTag(str) {
  // edge cases
  if (str.trim().length > 280 || str.trim().length === 0) return false;

  const words = str.split(" ");

  const tagArray = words.map((elem) => {
    return elem[0].toUpperCase() + elem.slice(1);
  });

  return "#" + tagArray.join("");
}

console.log(createHashTag("I code only javascript")); // #ILoveJavascript
