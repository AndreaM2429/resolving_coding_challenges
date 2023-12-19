// Basic Recursion

// You will be given a positive integer number . Fill in the method sum so that it adds up all the positive integers up to number
// and returns the sum. For example, when given 4 it should return 10 (4+3+2+1).

// While there are other ways to solve this challenge, you should use recursion to get the sum.

// Examples

// console.log(sum(4))
//=> (4 + 3 + 2 + 1) = 10

// console.log(sum(10))
// => 55

function sum(number) {
  let result = 0;
    const sumNumbers = (number2) => {
      if (number2 === 0) return;
      result += number2;
      sumNumbers(number2 - 1);
    };
    sumNumbers(number);
    return result;
}

console.log(sum(4)) // 10
console.log(sum(10)) // 55
console.log(sum(7)) // 28
console.log(sum(13)) // 91