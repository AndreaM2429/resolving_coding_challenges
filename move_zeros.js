// Coding challenge: Move Zeroes

// Given an integer array nums, create a function that moves all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// **Example 2:**
// Input: nums = [0]
// Output: [0]

function MoveZeroes(nums) {
  if(nums.length === 1){
    return nums;
  }

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0){
      nums.splice(i,1);
      nums.push(0);
    }
  }
  return nums;
}

console.log(MoveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(MoveZeroes([0])); // [0]
console.log(MoveZeroes([0,2,0])); // [2,0,0]