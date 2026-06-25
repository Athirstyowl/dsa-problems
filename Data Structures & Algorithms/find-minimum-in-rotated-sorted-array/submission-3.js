class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length-1
        let min = Math.min(nums[l], nums[r])

        while(l<=r){
            min = Math.min(nums[l], nums[r], min)
            const mid = Math.floor((l+r)/2)
            min = Math.min(nums[mid], min)
            if(nums[l]<nums[mid]){
                l = mid + 1
            }
            else{
                r = mid-1
            }
        }
        return min
    }
}
