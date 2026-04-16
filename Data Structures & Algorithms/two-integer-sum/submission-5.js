class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = {};

        for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];
            if (complement in myMap) {
                return [myMap[complement], i];
            } else {
            myMap[nums[i]] = i;
            }
        }
    }
}
