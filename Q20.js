// Calculate AGE of a person given his DOB

const fun = (d) => {
  return Math.floor((new Date() - new Date(d)) / (3600 * 24 * 1000 * 365));
};

console.log(fun("1999-07-22"));
