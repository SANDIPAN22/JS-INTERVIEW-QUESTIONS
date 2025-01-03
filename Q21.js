// Prepare the Number:
//? Start with the digits of the number. For example, if validating the number 79297398713.
//? Reverse the Digits:
//? Reverse the digits of the number. For the example, it becomes 31789379297.
//todo Double Every Second Digit:
// Starting from the first digit, double every second digit.
//todo For our example: 3, 1*2, 7, 8*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
//? Which translates to: 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9.
//? Subtract 9 from Numbers Higher Than 9:

// 16 = 16 - 9 = 7
// 16 = 1 + 6 =7

// 14 = 14-9= 5
// 14= 1+4=5

// If doubling the number results in a number greater than 9, subtract 9 from it.
//? Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.
//todo Sum All Digits:
//? Add all the digits together.
//* 3 + 2 + 7 + 7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.
//todo Check Modulo 10:
//? If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to Luhn.

const fun = (str) => {
  let phase1 = str
    .split(" ")
    .join("")
    .split("")
    .reverse()
    .map((elem, ind) => {
      if (ind % 2) {
        return elem * 2;
      }
      return elem * 1;
    });
  console.log(phase1);
  let phase2 = phase1.map((elem) => {
    if (elem > 9) {
      return elem - 9;
    }
    return elem;
  });
  console.log(phase2);
  let phase3 = phase2.reduce((a, b) => a + b, 0);
  console.log(phase3);
  return phase3 % 10 ? false : true;
};

console.log(fun("4539 1488 0343 6467"));
