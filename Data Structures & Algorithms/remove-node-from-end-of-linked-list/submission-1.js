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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = { val:0, next: head}

        let len = 0
        let node = head

        while(node){
            node = node.next
            len++
        }

        let prev = dummy
        let cur = head
        let curIndex = 0
        const targetIndex = len - n

        while(cur){
            if(curIndex == targetIndex){
                    prev.next = cur.next
                    return dummy.next
            }
            else{
                prev = cur
                cur = cur.next
                curIndex++
            }            
        }

        return dummy.next
    }
}
