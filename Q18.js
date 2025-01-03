// check the object is empty or not

const fun = (obj) => {
  return Object.keys(obj).length ? "NOT EMPTY" : "EMPTY";
};

console.log(fun({}));
