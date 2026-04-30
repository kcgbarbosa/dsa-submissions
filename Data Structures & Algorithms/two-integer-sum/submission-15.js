class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // define hashMap. Will have the keys as nums and the values as their indexes
        const hashMap = {};

        // populate the hashmap
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            hashMap[num] = i;
        }

        // need to track the numbers ive seen and compare it to the number im looking for 

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let complement = target - num;
            if (complement in hashMap && hashMap[complement] !== i) {
                return [hashMap[complement], i];
            }
        }
    }
}
