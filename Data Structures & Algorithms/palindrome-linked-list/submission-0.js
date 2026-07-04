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
     * @return {boolean}
     */
    isPalindrome(head) {

        let slow = head
        let fast = head

        while(fast !== null && fast.next !== null){
            slow = slow.next
            fast = fast.next.next
        }

        // Reverse second half
        let prev = null
        let cur = slow
        while(cur){
            const temp = cur.next
            cur.next = prev
            prev = cur
            cur = temp
        }

        let left = head
        let right = prev
        while(right){
            if(left.val != right.val) return false
            left = left.next
            right = right.next
        }

        return true
        
    }
}
