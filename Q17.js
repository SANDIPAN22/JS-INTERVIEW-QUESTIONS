// Create a HEX color code

const fun = () => {
  const opts = "ABCDEF1234567890";
  let ans = "";
  for (let i = 0; i < 6; i++) {
    ans += opts.charAt(Math.floor(Math.random() * 16));
  }
  return "#" + ans;
};

console.log(fun());
