class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // define hashamp
        const hashMap = {};

        // iterate over nums in nums
        for (let i = 0; i < nums.length; i++) {
            // assign num as current iteration of nums
            const num = nums[i];
            // assign complement as the remaining value after subtracting num from the target
            const complement = target - num;

            // if the complement exists in the hashmap..
            if (complement in hashMap) {
                // return the value of the key 'complement' (the index)
                // also return i for the current index  
                return [hashMap[complement], i]
            }
            // if the complement for the current iteration of num doesnt exist in the hashmap:
            // ...assign the current iteration of num as a key, and assign its value to be its index
            hashMap[num] = i;
        }
        // note: able to do this without another conditional because of the early return that exists in the `if` above it 

        
    }
}
