class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Sets hold unique values
        const checked = new Set();
        // iterate through nums 
        for (let i = 0; i < nums.length; i++) {
            // if our Set already has value i, its a duplicate, return true
            if (checked.has(nums[i])) {
                return true;
            } else {
                // otherwise, add the num to our Set
                checked.add(nums[i]);
            }
        }
            // reach the end of nums without encountering a duplicate? return false
        return false;
    }
}
 