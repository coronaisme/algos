// Given an array nums with n integers, your task is to check if 
// it could become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds 
// for every i (0-based) such that (0 <= i <= n - 2).

 

// Example 1:

// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

class Solution {
    public boolean checkPossibility(int[] nums) {
        int count = 0;
        for(int i = 1; i < nums.length; i++) {
            if(nums[i-1] > nums[i]) {
                if(i != nums.length - 1 && i != 1 && nums[i-1] > nums[i+1] && nums[i-2] > nums[i]) return false;
                count++;
                if(count > 1) return false;
            }
        }
        return true;
    }
}