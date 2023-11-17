function sum(number) {
  // write your code here
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
