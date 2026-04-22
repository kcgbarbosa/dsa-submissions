class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // i can solve this using a hashmap
        // i will create an empty object, iterae through the string, and set each key to be the char and each value to be the amount of times it exists in the full string

        // then I will iterate through the second string
        // because i have a hashmap which includes the count of each letter, whenever i get to a letter, i can subtract from it 

        if (s.length !== t.length) {
            return false;
        }

        const hashMap = {};

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (!hashMap[char]) {
                hashMap[char] = 1;
            } else {
                hashMap[char]++;
            }
        }

        for (let i  = 0; i < t.length; i++) {
            const char = t[i];
            if (!hashMap[char]) {
                return false;
            }
            if (hashMap[char] > 0 && hashMap[char] !== undefined) {
                hashMap[char]--;
            }
        }
        return true;
    }
}
