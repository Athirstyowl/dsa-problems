class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixArr = new Array(nums.length).fill(1)
        const suffixArr = new Array(nums.length).fill(1)
        const res = new Array(nums.length).fill(0)

        for(let i = 1;i<nums.length;i++){
            prefixArr[i] = prefixArr[i-1] * nums[i-1]
        }
        for(let i = nums.length -2; i >= 0; i--){
            suffixArr[i] = suffixArr[i+1] * nums[i+1]
        }

        for(let i = 0; i < nums.length; i++){
            res[i] = prefixArr[i] * suffixArr[i]
        }

        return res
    }
}
