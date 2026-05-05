class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sortedNums = nums.sort()
        const n = nums.length
        for(let i = 0; i < n; i++){
            if(nums[i] == nums[i+1]){
                return true
            }
            else{
                continue
            }
        }
        return false
    }
}
