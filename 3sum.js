// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for(let i = 0; i < nums.length; i++) {
      let low = i+1, high = nums.length-1, sum = 0;
      
      while(low < high) {
          sum = nums[i] + nums[low] + nums[high];
          
          if(sum === 0) {
              result.push([nums[i], nums[low], nums[high]]);
              while(nums[low+1] === nums[low]) low++;
              while(nums[high-1] === nums[high]) high--;
              low++;
              high--;
          } else if(sum < 0) low++;
          else high--;
      }
      while(nums[i+1] === nums[i]) i++;
  }
  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4])) // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])) // []
console.log(threeSum([0,0,0])) // [[0,0,0]]