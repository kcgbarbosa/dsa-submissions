class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashMap = {};

        if (s.length !== t.length) {
            return false;
        }

         for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (!hashMap[char]) { 
                hashMap[char] = 1;
            } else {

            hashMap[char]++;
            }
         }

          for (let i = 0; i < t.length; i++) {
            const char = t[i]
            if (!hashMap[char]) {
                return false;
            }
            hashMap[char]--;
          }
            return true;
    }
}
