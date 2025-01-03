// Problem Statement: Write a function that takes a string as input and return the longest word in the string.
// If there is multiple largest words in the string, then return the first one.

const input = "A quick brown fox jumped over the lazy dog";

const fun = (str) => {
  // edge cases
  if (str.trim().length === 0) return false;

  max_len = 0;
  max_word = false;

  // reversing it because we need first one in case same maximum length multiple words are there
  const words = str.split(" ").reverse();

  // iterating through each word and comparing its length with max_len, if found equal or larger then update max_word and max_len accordingly.
  for (let word of words) {
    if (word.length >= max_len) {
      max_word = word;
      max_len = word.length;
    }
  }
  // returning the longest word in the string.  If no word found, return false.  If multiple longest words, return the first one.
  return max_word;
};

console.log(fun(input));

// second approach using Reduce Function

const fun2 = (str) => {
  const words = str.split(" ").reverse();
  const longestWord = words.reduce(
    (last, curr) => (curr.length > last.length ? curr : last),
    ""
  );
  return longestWord;
};

console.log(fun2(input));
