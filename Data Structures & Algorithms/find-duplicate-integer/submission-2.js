class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow = nums[0]  //1 
        let fast = nums[0] //1

        do {
            slow = nums[slow]
            fast = nums[nums[fast]]
        } while(slow !== fast)

        let slow2 = nums[0]

        while(slow2 != slow){
            slow = nums[slow]
            slow2 = nums[slow2]
        }

        return slow

    }
}


