class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numPairs = {};

        for(let i = 0; i< nums.length; i++) {
            numPairs[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (numPairs[complement] !== undefined && numPairs[complement] !== i) {
            return [numPairs[complement], i];
        }
        }
    }
}
