class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const n = nums.length

        for( let i = 0; i < n; i ++){
            let index = Math.abs(nums[i]) - 1

            if(nums[index] < 0) return Math.abs(nums[i])

            nums[index] = nums[index] * -1
        }
        return -1    
    }
}
