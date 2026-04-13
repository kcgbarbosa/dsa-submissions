class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const charMap= {};
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (!charMap[char]) {
                charMap[char] = 1;
            } else {
                charMap[char]++
            }
        }
        for (let i = 0; i < t.length; i++) {
            const char = t[i];
            if (charMap[char] === undefined || charMap[char] === 0) {
                return false;
            }
             charMap[char]--
        } 
        return true;
    }
}
