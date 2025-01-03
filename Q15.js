// create a occurrence counter and find out which is occurring highest number of times

const fun = (arr) => {
  const obj = {};
  for (let e of arr) {
    if (obj[e]) {
      obj[e] += 1;
    } else {
      obj[e] = 1;
    }
  }
  console.log(obj);
  // from obj to break it down to key value pair
  //sort it based on value
  // picked the last pair and choose the key only
  // then multiply it 1 to make it Number from String
  return (
    Object.entries(obj)
      .sort((a, b) => a[1] - b[1])
      .at(-1)[0] * 1
  );
};

console.log(fun([1, 1, 1, 1, 34, 3, 4, 4, 2]));
