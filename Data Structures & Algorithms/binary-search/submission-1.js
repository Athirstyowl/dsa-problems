class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length-1
        while(l <= r){
            const mid = Math.floor(r-l)
            if(nums[mid] == target) return mid
            else if(nums[mid] > target){
                r = mid - 1
            }
            else if(nums[mid] < target){
                l = mid + 1
            }
        }
        return -1
    }
}
