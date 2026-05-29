class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const findArea = (i, j) => {
            return (j - i) * Math.min(heights[i], heights[j])
        }

        let i = 0 // 1
        let j = heights.length -  1 // 7

        let maxArea = 0 // 7 

        while(i < j){
           const newArea = findArea(i,j) 
           maxArea = Math.max(maxArea, newArea)
           if(heights[i] <= heights[j]){
            i++
           }
           else if(heights[i] > heights[j]){
            j--
           }
        }
        return maxArea
    }
}
