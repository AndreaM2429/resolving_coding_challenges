// Balanced Brackets
// There are 3 kinds of Brackets: [] {} (). Given a String of characters, check if all the brackets in the String are Balanced.
// A string is balanced if all the start and end brackets are in a correct order so they match each other.

// Examples
// The following are 3 test cases:

// console.log(balanced_brackets?('(hello)[world]'))
// => true

// console.log(balanced_brackets?('([)]'))
// => false

// console.log(balanced_brackets?('[({}{}{})([])]'))
// => true

function balancedBrackets(string) {
  // your code here
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const arr = string.split("");
  const brackets = [];
  const balance =[];

  for (let i = 0; i < arr.length; i +=1){
    if (arr[i] === '(' || arr[i] === ')' || arr[i] === '[' || arr[i] === ']'|| arr[i] === '{'|| arr[i] === '}'){
      brackets.push(arr[i]);
    }
  }
  for (let i = 0; i < brackets.length; i += 1) {
    if(brackets[i] === '(' || brackets[i] === '[' || brackets[i] === '{'){
        balance.push(brackets[i]);
    }
    if(brackets[i] === ')' || brackets[i] === ']' || brackets[i] === '}'){
        if(balance.pop() !== bracketPairs[brackets[i]]){
            return false;
        }
    }
  }
  return balance.length === 0; 

}
 
console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true
