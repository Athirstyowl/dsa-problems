class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {}
        for(let i = 0; i<nums.length; i++){
            hashMap[nums[i]] = i
        }
        for(let i = 0; i<nums.length; i++){
            const neededNum = target - nums[i];
            if(hashMap.hasOwnProperty(neededNum) && (hashMap[neededNum] != i) ){
                return [i, hashMap[neededNum]]
            }
            else{
                continue;
            }
        }
    }
}
