function findErrorNums(nums: number[]): number[] {

    let i = 0
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        } else {
            i++;
        }
    }

    for( let i = 0; i < nums.length; i++){
        if(nums[i] != i+1){
            return [nums[i], i+1]
        }
    }
    return []
};