class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const checked = new Set();
        for (let num of nums) {
            if (checked.has(num)) {
            return true;
            } else {
                checked.add(num);
            }
        }
            return false;
    }
}
