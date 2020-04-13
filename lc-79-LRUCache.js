/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
      this.key = key
      this.val = value
      this.next = null
      this.prev = null
    }
}
class DLL {
    constructor() {
      this.head = null
      this.tail = null
      this.length = 0
    }
    
    unshift = (key, val) => {
        const node = new Node(key, val)
        if (this.length === 0) {
            this.head = node
            this.tail = node
        }
        else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.length++;
        return node
    }
    
    pop = () => {
        if(this.head === this.tail){
            this.head = null
            this.tail = null
            this.length = 0
        }
        else{
            this.tail = this.tail.prev
            this.tail.next.prev = null
            this.tail.next = null
            this.length--
        }
    }
    
    remove = node => {
        if(node.next !== null){
            node.next.prev = node.prev
        }
        else
            this.tail = node.prev
        
        if(node.prev !== null){
            node.prev.next = node.next
        }
        else {
            this.head = node.next
        }
        node.next = null
        node.prev = null
        this.length--
        return node
    }
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.dll = new DLL()
    this.cache = {};
};


/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache[key]){
        this.dll.remove(this.cache[key])
        this.cache[key] = this.dll.unshift(this.cache[key].key, this.cache[key].val)
        return this.cache[key].val
    }
    else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache[key]){
        this.dll.remove(this.cache[key])
        this.cache[key] = this.dll.unshift(key, value)
    }
    else if(this.dll.length >= this.capacity){
        delete this.cache[this.dll.tail.key]
        this.dll.pop()
        this.cache[key] = this.dll.unshift(key,value)
    }
    else {
        this.cache[key] = this.dll.unshift(key, value)
    }
};


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */