class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const plainStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let i = 0
        let j = plainStr.length - 1

        while(i<=j){
            if(plainStr[i] != plainStr[j]){
                return false
            }
            i++
            j--
        }

        return true

    }
}
