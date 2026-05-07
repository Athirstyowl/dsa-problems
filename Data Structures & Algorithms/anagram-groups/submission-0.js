class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMapOfString = {} 
        for(const str of strs){
            const count = new Array(26).fill(0);
            for(const s of str){
                count[s.charCodeAt() - 'a'.charCodeAt()] += 1
            }
            if(hashMapOfString[count]){
                hashMapOfString[count].push(str)   
            }
            else{
                hashMapOfString[count] = [str]
            }
        }
        return Object.values(hashMapOfString)
    }
}
