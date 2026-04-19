class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // define hash map;
        const hashMap = {};

        // handle edge case
        if (s.length !== t.length) {
            return false;
        }
        // iterate over characters in string 's' and populate hash map
        for (let i = 0; i < s.length; i++) {
            // define character 
            const char = s[i]
            // if character doesnt exist, create it and assign value to 1 
            if (!hashMap[char]) {
                hashMap[char] = 1;
            } else {
                // otherwise (exists), increment value
                hashMap[char]++;
            }   
        }
        // iterate over characters in string 't' and subtract from existing hash map count 
        for (let i = 0; i < t.length; i++) {
            // define character
            const char = t[i];
            // if character exists. decrement it 
            if (hashMap[char]) {
                hashMap[char]--;
            } else {
            // handle case, letter doesnt exist (not an anagram)
                return false;
            }
        }
        return true;
    }
}
