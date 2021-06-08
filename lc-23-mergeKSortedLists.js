/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
   if(lists.length === 0){
       return null
   }
   return anotherMethoddivideAndMergeList(lists)
};

var divideAndMergeList = (lists) => {
    
    while(lists.length > 1){
        let k = lists.length
        for(let i = 1; i < k && lists[i] !== undefined; i+=2) {
            lists[i-1] = mergeTwoLists(lists[i-1], lists[i])
            lists.splice(i,1)
        }
    }
    
    let head = lists[0]
    return lists[0]
}

var anotherMethoddivideAndMergeList = (lists) => {
    if(lists.length === 0)
        return null
    if(lists.length === 1)
        return lists[0]
    if(lists.length === 2)
        return mergeTwoLists(lists[0], lists[1])
    
    return mergeTwoLists(anotherMethoddivideAndMergeList(lists.slice(0, Math.floor(lists.length/2))), anotherMethoddivideAndMergeList(lists.slice(Math.floor(lists.length/2))))
}

var mergeTwoLists = function(l1, l2) {
    if(l1 === null)
        return l2
    if(l2 === null)
        return l1
    let result
    if(l1.val <= l2.val){
        result = new ListNode(l1.val)
        l1 = l1.next
    }
    else {
        result = new ListNode(l2.val)
        l2 = l2.next
    }
    let head = result
    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            head.next = new ListNode(l1.val)
            l1 = l1.next
        }
        else{
            head.next = new ListNode(l2.val)
            l2 = l2.next
        }
        head = head.next
    }
    while(l1 !== null){
        head.next = new ListNode(l1.val)
        l1 = l1.next
        head = head.next
    }
    
    while(l2 !== null){
        head.next = new ListNode(l2.val)
        l2 = l2.next
        head = head.next
    }
    return result
};