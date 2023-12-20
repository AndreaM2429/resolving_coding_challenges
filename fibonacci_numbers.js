// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function Fibonacci(num) {
  // write your code here
  let arr = [1, 1];
  let sum = 0;
  for (let i = 2; i <= num; i++){
    arr.push(arr[i-2] + arr[i-1]);
  }
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !==0 && arr[i] <= num){
      sum += arr[i];
    }
  }
  return sum;
}

console.log(Fibonacci(1000)) // 1785
console.log(Fibonacci(4000000)) // 4613732
console.log(Fibonacci(4)) // 5
console.log(Fibonacci(75024)) // 60696