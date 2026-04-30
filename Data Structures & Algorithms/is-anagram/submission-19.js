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
            let char = s[i];
            if (!hashMap[char]) {
             hashMap[char] = 1;
            } else {
                hashMap[char]++;
            }
        }
        for (let i = 0; i < t.length; i++) {
            let char = t[i];
            if (!hashMap[char]) {
                return false;
            }
            hashMap[char]--;
        }
        return true;
    }
}
