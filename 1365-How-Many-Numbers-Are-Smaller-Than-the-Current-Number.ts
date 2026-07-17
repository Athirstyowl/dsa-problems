function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sortednums = [...nums].sort((a,b) => a - b)
    const smallerCountHash = {}
    const res = []

    for(let i = 0; i < sortednums.length; i++){
        if(!smallerCountHash.hasOwnProperty(sortednums[i])){
            smallerCountHash[sortednums[i]] = i
        }
    }

    for(let i = 0; i < nums.length; i++){
        res.push(smallerCountHash[nums[i]])
    }

    return res

};