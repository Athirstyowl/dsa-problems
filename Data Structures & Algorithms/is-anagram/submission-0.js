class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashMap = {}
        if(s.length !== t.length){
            return false
        }

        for(const element of s){
            if(!hashMap[element]){
                hashMap[element] = 1
            }
            else{
                hashMap[element] += 1
            }
        }

        for(const element of t){
            if(!hashMap.hasOwnProperty(element)){
                return false
            }
            else if(hashMap[element] > 0){
                hashMap[element] -= 1
            }
            else{
                return false
            }
        }

        return true
    }
}
