// JSON Deep Equal

// Description
// Given two values o1 and o2, return a boolean value indicating whether two values, o1 and o2, are deeply equal.

// For two values to be deeply equal, the following conditions must be met:

// If both values are primitive types, they are deeply equal if they pass the === equality check.

// If both values are arrays, they are deeply equal if they have the same elements in the same order, and each element is also deeply equal according to these conditions.

// If both values are objects, they are deeply equal if they have the same keys, and the associated values for each key are also deeply equal according to these conditions.

// You may assume both values are the output of JSON.parse. In other words, they are valid JSON.

// Please solve it without using lodash's _.isEqual() function

// Example 1:

// Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
// Output: true
// Explanation: The keys and values match exactly.
// Example 2:

// Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
// Output: true
// Explanation: Although the keys are in a different order, they still match exactly.
// Example 3:

// Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
// Output: false
// Explanation: The array of numbers is different from the array of strings.
// Example 4:

// Input: o1 = true, o2 = false
// Output: false
// Explanation: true !== false

// Constraints:

// 1 <= JSON.stringify(o1).length <= 105
// 1 <= JSON.stringify(o2).length <= 105
// maxNestingDepth <= 1000

function isEqual(o1, o2) {
  // if they are neither array nor object then simple do ===
  if (
    !Array.isArray(o1) &&
    !Array.isArray(o2) &&
    typeof o1 !== "object" &&
    typeof o2 !== "object"
  ) {
    return o1 === o2;
  }
  // if both of them are array
  else if (Array.isArray(o1) && Array.isArray(o2)) {
    if (o1.length !== o2.length) {
      return false;
    }
    for (let i = 0; i < o1.length; i++) {
      if (!isEqual(o1[i], o2[i])) {
        return false;
      }
    }
    return true;
  }
  // if both of them are object
  else if (typeof o1 === "object" && typeof o2 === "object") {
    if (o1 === null || o2 === null) {
      return o1 === o2;
    }
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    for (let k of keys1) {
      if (!isEqual(o1[k], o2[k])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(
  //   isEqual({ x: null, L: [1, 2, 3] }, { x: null, L: ["1", "2", "3"] })
  isEqual({ y: 2, x: 1 }, { x: 1, y: 2 })
);
