/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0, null)
        let curr = dummy

        let carry = 0

        while( l1 != null || l2 != null || !(carry == 0)){
            const val1 = l1 ? l1.val : 0;
            const val2 = l2 ? l2.val : 0;
            const sum = val1 + val2 + carry;
            carry = Math.floor( sum / 10)
            curr.next = new ListNode(sum % 10)

            // Safe advancement: only move to next if the node exists
            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
            
            curr = curr.next
        }

        return dummy.next

    }
}
