function findMaxConsecutiveOnes(nums: number[]): number {

    let maxCount = 0
    let curCount = 0

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            curCount++
        }
        else{
            curCount = 0
        }
        maxCount = Math.max(maxCount, curCount)
    }
    return maxCount
};