class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const hashMap = {};
        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (!hashMap[char]) {
                hashMap[char] = 1
            } else {
            hashMap[char]++
            }
        }
        for (let i = 0; i < t.length; i++) {
            const char = t[i];

            // if char is falsy, return false
            if (!hashMap[char]) {
                return false;
            }
            // otherwise, decrement the char

            hashMap[char]--;

        }
        // if we get to end of string without finding a falsy amount of letters, return true
        return true;
    }
}
