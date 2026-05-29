class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a,b) => a-b)
        const res = []
        for(let i = 0; i < nums.length; i++){
            if(sortedNums[i] > 0) break;
            if(i > 0 && sortedNums[i] == sortedNums[i-1]) continue;

            let l = i+1
            let r = sortedNums.length - 1
            while(l < r) {
                const sum = sortedNums[i] + sortedNums[l] + sortedNums[r]
                if(sum > 0){
                    r--
                }
                else if(sum < 0){
                    l++
                }
                else{
                    res.push([sortedNums[i], sortedNums[l], sortedNums[r]])
                    l++
                    r--
                    while(l < r && sortedNums[l] == sortedNums[l-1]){
                        l++
                    }
                }
            }
        }

        return res
    }
}