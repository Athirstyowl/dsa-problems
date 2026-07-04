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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head 

        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null
        while(slow){
            let temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        }

        let left = head

        while(prev && prev.next){ //need to find the conditon
            let tempLeft = left.next
            let tempPrev = prev.next

            left.next = prev
            prev.next = tempLeft

            left = tempLeft
            prev = tempPrev

        }
    }
}




