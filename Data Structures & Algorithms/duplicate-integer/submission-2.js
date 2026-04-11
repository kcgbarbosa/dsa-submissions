class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checked = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (checked.has(nums[i])) {
                return true;
            } else {
                checked.add(nums[i])
            }
        }
        return false;
    }
}
