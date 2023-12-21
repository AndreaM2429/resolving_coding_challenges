// HashTables
// Maps and Sets provide a clean interface for accessing or looking up the elements within them.
// There are a number of different ways in which they can be implemented, but the most common one uses a technique known as hashing.

// Create your own list-based hash table with n mod 11 as the hash function for each number n. Always use the absolute value of n.
// Given a list of numbers, hash them all into the hash table.
// Return an array with the numbers in the order that they appear in the hash table.

// Sample Input
// [12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]
// Sample Output
// [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]
// The hash table will look like this at the end:

// 0  1  2  3  4  5  6   7   8   9   10  //index
// . 12 24 91 125 5 1106 29  . 1021  10  //values
//       2       3536
// Example
// hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10])
// // => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]

function hashTable(arr) {
  const hashTable = Array.from({ length: 11 }, () => []);

  arr.forEach((element) => {
    const itemIndex = Math.abs(element) % 11;
    hashTable[itemIndex].push(element);
  });

  const hashTableResult = [];
  hashTable.forEach((space) => {
    space.forEach((number) => {
      hashTableResult.push(number);
    });
  });

  return hashTableResult;
}

console.log(hashTable([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10]))
// => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]

console.log(hashTable([2, 341, 73, 8265, 234004, 602, 7400000, 200000000]))
// => [341, 234004, 2, 200000000, 7400000, 8265, 73, 602]
