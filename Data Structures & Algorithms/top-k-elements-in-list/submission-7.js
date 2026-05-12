class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // topKFrequent(nums, k) {
    //     const hashMap = {}
    //     const minPriorityQueue = new MinPriorityQueue((arr) => arr[1])

    //     // for(const num of nums){
    //     //     if(hashMap[num]){
    //     //         hashMap[num] += 1
    //     //     }
    //     //     else{
    //     //         hashMap[num] = 1
    //     //     }
    //     // }
    //     for(const num of nums){
    //         hashMap[num] = (hashMap[num] || 0) + 1
    //     }

    //     for( const [num, count] of Object.entries(hashMap)){
    //         minPriorityQueue.enqueue([num, count])
    //         if(minPriorityQueue.size() > k) minPriorityQueue.dequeue()
    //     }

    //     const res = []
    //     for(let i = 0; i < k; i++){
    //         const [num, count] = minPriorityQueue.dequeue()
    //         res.push(num)
    //     }
        
    //     return res
    // }

    // topKFrequent(nums, k) {
    //     const hashMap = {}
    //     const maxHeap = new MaxPriorityQueue((arr) => arr[1])

    //     // for(const num of nums){
    //     //     if(hashMap[num]){
    //     //         hashMap[num] += 1
    //     //     }
    //     //     else{
    //     //         hashMap[num] = 1
    //     //     }
    //     // }
    //     for(const num of nums){
    //         hashMap[num] = (hashMap[num] || 0) + 1
    //     }

    //     for( const [num, count] of Object.entries(hashMap)){
    //         maxHeap.enqueue([num, count])
    //     }

    //     const res = []
    //     for(let i = 0; i < k; i++){
    //         const [num, count] = maxHeap.pop()
    //         res.push(num)
    //     }
        
    //     return res
    // }

    topKFrequent(nums, k) {
        const countHashMap = {}

        for(const num of nums){
            countHashMap[num] = ( countHashMap[num] || 0) + 1
        }
        
        const res = Array.from({length: nums.length + 1}, () => [])

        for(const key in countHashMap){
            res[countHashMap[key]].push(key)
        }

        const final = []
        for(let i = res.length-1; i > 0; i--){
            for(const n of res[i]){
                if(n == undefined) break
                final.push(n)
                if(final.length == k){
                    return final
                }
            }
        }

        return final
    }
}
