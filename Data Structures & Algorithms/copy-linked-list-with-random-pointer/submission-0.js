// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {

        let cur = head
        while(cur){
            const newNode = new Node(cur.val, cur.next, null)
            cur.next = newNode
            cur = cur.next.next
        }

        cur = head

        while(cur){
            cur.next.random = cur.random?.next ?? null
            cur = cur.next.next
        }

        let newHead = null
        let newCur = null
        cur = head

        while(cur){
            const temp = cur.next
            cur.next = cur.next.next
            cur = cur.next
            if(!newHead) {
                newHead = temp
                newCur = temp
            }
            else{
                newCur.next = temp
                newCur = newCur.next
            }
        }

        return newHead
    }
}
