class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // define set
        const checked = new Set();
        // loop through each item in nums
        for (let i = 0; i < nums.length; i++) {
            // if the current value of num ALREADY exists, return true  
            if (checked.has(nums[i])) {
                return true
                }
            // otherwise, add it to the set
            checked.add(nums[i]);
            }
        return false
        }
}

