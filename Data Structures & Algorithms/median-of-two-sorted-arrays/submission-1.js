class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;

        // Ensure A is always the smaller array
        if (A.length > B.length) {
            A = nums2;
            B = nums1;
        }
        
        const m = A.length;
        const n = B.length;
        const totalLength = m + n;
        // Using + 1 handles both odd and even totals cleanly for the left half
        const half = Math.floor((totalLength + 1) / 2); 

        let l = 0;
        let r = m; // Crucial: range is 0 to m (total cuts possible)

        while (l <= r) {
            const i = Math.floor((l + r) / 2); // Cut index for A
            const j = half - i;                // Cut index for B

            // i is the cut, so element to left is i-1, right is i
            let A_left = (i === 0) ? -Infinity : A[i - 1];
            let A_right = (i === m) ? Infinity : A[i];

            // j is the cut, so element to left is j-1, right is j
            let B_left = (j === 0) ? -Infinity : B[j - 1];
            let B_right = (j === n) ? Infinity : B[j];

            // Check if we found the perfect partition
            if (A_left <= B_right && B_left <= A_right) {
                // Odd number of elements
                if (totalLength % 2 !== 0) {
                    return Math.max(A_left, B_left);
                }
                // Even number of elements
                return (Math.max(A_left, B_left) + Math.min(A_right, B_right)) / 2;
            }
            else if (A_left > B_right) {
                r = i - 1; // A's left is too big, move cut left
            }
            else {
                l = i + 1; // A's left is too small, move cut right
            }
        }
        return 0.0;
    }
}