
class Node {
    constructor(key, value, prev = null, next = null){
        // Inside Node constructor
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity
        this.cacheHashMap = {}
        this.left = new Node(0,0),
        this.right = new Node(0,0)
        this.left.next = this.right 
        this.right.prev = this.left
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cacheHashMap[key]){
            const curNode = this.cacheHashMap[key]
            this.remove(curNode)
            this.insert(curNode)
            return curNode.value
        }
        else{
            return -1
        }
    }

    // remove from left most
    remove(node){
        const temp = node
        node.prev.next = temp.next
        node.next.prev = temp.prev
    }

    // insert at right most
    insert(node){
        const prev = this.right.prev 
        this.right.prev.next = node
        this.right.prev = node
        node.next = this.right
        node.prev = prev
    }
    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cacheHashMap[key]) this.remove(this.cacheHashMap[key])
        this.cacheHashMap[key] = new Node(key, value, null, null)
        this.insert(this.cacheHashMap[key])

        if(Object.keys(this.cacheHashMap).length > this.cap){
            const lru = this.left.next
            this.remove(this.left.next)
            delete this.cacheHashMap[lru.key]
        }
    }
}
