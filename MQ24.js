// // Convert Object to JSON String (just like JSON.stringify)

// Example 1:

// Input: object = {"y":1,"x":2}
// Output: {"y":1,"x":2}
// Explanation:
// Return the JSON representation.
// Note that the order of keys should be the same as the order returned by Object.keys().

// Example 2:

// Input: object = {"a":"str","b":-12,"c":true,"d":null}
// Output: {"a":"str","b":-12,"c":true,"d":null}
// Explanation:
// The primitives of JSON are strings, numbers, booleans, and null.

// Example 3:

// Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
// Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
// Explanation:
// Objects and arrays can include other objects and arrays.

// Example 4:

// Input: object = true
// Output: true
// Explanation:
// Primitive types are valid inputs.

function MyStringify(obj) {
  // if null
  if (obj === null) {
    return "null";
  }
  // anything else but not OBJECT
  if (typeof obj !== "object") {
    if (typeof obj === "string") return `"${obj}"`;
    if (typeof obj === "number" || typeof obj === "boolean")
      return obj.toString();
  }
  // if array
  if (Array.isArray(obj)) {
    let newArr = obj.map(MyStringify);
    return `[${newArr.join(",")}]`;
  }
  // if object
  let tempArr = Object.entries(obj).map(
    ([k, v]) => `${MyStringify(k)}:${MyStringify(v)}`
  );
  return `{${tempArr.join(",")}}`;
}

console.log(MyStringify({ a: "str", b: -12, c: true, d: null }));
console.log(
  MyStringify({ a: "str", b: -12, c: true, d: null }) ===
    JSON.stringify({ a: "str", b: -12, c: true, d: null })
);
