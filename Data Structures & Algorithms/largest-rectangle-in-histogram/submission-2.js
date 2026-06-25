class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0
        const stack = []

        for(let i = 0; i < heights.length; i++){
            let startIndex = i
            while( 
                stack.length > 0 && 
                stack[stack.length-1][1] > heights[i])
            {
                const [prevIndex, prevHeight] = stack.pop()
                maxArea = Math.max(maxArea, prevHeight * (i - prevIndex))
                startIndex = prevIndex
            }
            stack.push([startIndex, heights[i]])
        }


        while(stack.length > 0){
            const [prevIndex, prevHeight] = stack.pop()
            maxArea = Math.max(maxArea, prevHeight*(heights.length-prevIndex))
        }


        return maxArea
    }
}
