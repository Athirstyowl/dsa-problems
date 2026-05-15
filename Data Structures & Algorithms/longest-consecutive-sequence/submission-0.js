class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // nums=[2,20,4,10,3,4,5]
    longestConsecutive(nums) {
        const hashSet = new Set() // [2,20,10,3,4,5]

        let longest = 0
        for(let i = 0; i < nums.length; i++){
            hashSet.add(nums[i])
        }

        for(let i = 0; i < nums.length; i++){
            let length = 0
            if(!hashSet.has(nums[i]-1)){
                length++
                while(hashSet.has(nums[i]+length)){
                    length++
                }
            }
            if(length > longest){
                longest = length
            }
        }

        return longest
    }
}
