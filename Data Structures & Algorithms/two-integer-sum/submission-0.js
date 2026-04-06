class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = {};

        for (let i = 0; i < nums.length; i++) {
            myMap[nums[i]] = i;
        }

        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (complement in myMap && myMap[complement] !== i) {
                return [i, myMap[complement]]
            }
        }

    }
}
