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
        let fast = head,
            slow = head;

        // find middle (slow)
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // reverse second half
        let prev = null;
        while (slow) {
            let tmp = slow.next;
            slow.next = prev;
            prev = slow;
            slow = tmp;
        }

        // check palindrome
        let left = head,
            right = prev;
        while (right) {
            if (left.val !== right.val) {
                return false;
            }
            left = left.next;
            right = right.next;
        }

        return true;
    }
}