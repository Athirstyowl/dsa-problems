class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr = []
        for (const n of nums) {
            if(arr.length > 0 && arr.includes(n)){
                return true
            }
            arr.push(n)
        }
        return false
    }
}
