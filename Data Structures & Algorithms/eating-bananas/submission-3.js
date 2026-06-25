class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, maxh) {

        let l = 0
        let r = Math.max(...piles)

        let res = r

        while(l <= r){
            const mid = Math.floor((l+r)/2)
            let hours = 0
            for(let i = 0; i < piles.length; i++){
                hours = hours + Math.ceil(piles[i]/mid)
            }
            if(hours <= maxh){
                res = mid
                r = mid - 1
            }
            else{
                l = mid+1
            }
        }

        return res

    }
}
