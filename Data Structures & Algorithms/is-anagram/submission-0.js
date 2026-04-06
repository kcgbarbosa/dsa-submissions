class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // checking edge case
        if (s.length !== t.length) {
            return false;
        }

        // creating hash map that will be used to keep count of each characters occurences
        const count = {}

        // looping through each letter in s. 
        // NOTE: I can access all of the characters of both strings since we confirmed they are the same length
        for (let i = 0; i < s.length; i++) {
            const letter = s[i]
            // if the letter doesnt exist in the counter, create it by setting it to 1
            if(!count[letter]) {
                count[letter] = 1;
            } else {
                count[letter]++;
            }
        }
        // we then compare the characters in the other string to the map 

        for (let i = 0; i < t.length; i++) {
            const letter = t[i];

            // check if letter doesnt exist in the map, if so, return false
            if(count[letter] === undefined ) {
                return false
            }

            if(count[letter] < 1) {
                return false
            }
            count[letter]--;
        }
        return true;

    }
}
