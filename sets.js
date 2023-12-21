// Sets
// These are the important methods a Set, in JavaScript, supports:

// add(item) - Adds an item to the Set.
// delete(item) - Removes an item from the Set.
// has(item) - Returns true if the item is in the Set, and false otherwise.

// Challenge
// A duplicate is a number whose value appeared earlier in the list. Given a list of numbers, return an array with all the duplicates
// in the order that they appear. (Duplicates that appear multiple times should be printed multiple times).
// Use Ruby's Set class to solve the challenge.

// Example
// const arr = [1, 2, 3, 1, 5, 6, 7, 8, 5, 2]

// console.log(find_duplicates(arr))
// => [1, 5, 2]

function findDuplicates(array) {
  // write your code here
  const unique = new Set([]);
  const result = [];
  array.forEach((element) => {
    if (unique.has(element)) {
      result.push(element);
    } else {
      unique.add(element);
    }
  });
  return result;
}

console.log(findDuplicates([1, 2, 3, 1, 5, 6, 7, 8, 5, 2]))
// => [1, 5, 2]

console.log(findDuplicates([3, 501, 17, 23, -43, 67, 5, 888, -402, 235, 77, 99, 311, 1, -43]))
// => [-43]
