class Solution {

    binarySearch(nums, target){
        let l = 0
        let r = nums.length-1

        while(l<=r){
            let mid = Math.floor(r - l)
            if(target == nums[mid]) return true
            else if(target > nums[mid]) l = mid+1
            else if(target < nums[mid]) r = mid-1
        }
        return false  
    }

    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(const arr of matrix){
            if(!arr[arr.length-1] < target){
                const res = this.binarySearch(arr, target)
                if(res) return res
            }
        }
        return false
    }
}
