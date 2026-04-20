class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // define hashmap
        const hashMap = {};
        
        // iterate over each num and store its index as its 'value' (in a key-value pair)
        for (let i = 0; i < nums.length; i++) {
            
            const num = nums[i];
            const complement = target - num;

            if (complement in hashMap) {
                return [hashMap[complement], i];
            }

            hashMap[num] = i;
        }
    }
}
