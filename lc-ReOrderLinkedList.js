/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head == null || head.next == null) return;
  // Applying Slow and Fast Runner Technique
  let slow = head, fast = head

  // find the mid point
  while(fast !== null && fast.next !== null){
  	slow = slow.next
  	fast = fast.next.next
  }

  // reverse the linked list from mid point + 1
  let h1 = head
  let h2 = reverse(slow.next)
  slow.next = null
  while(h1 !== null && h2 !== null)
  {
  	const temp2 = h2.next
  	h2.next = h1.next
  	h1.next = h2
  	h1 = h2.next
  	h2 = temp2
  }

};

var reverse = function(head) {
    let prev = null, curr = head;
    
    while(curr != null){
        let revHead = curr.next
        curr.next = prev
        prev = curr
        curr = revHead
    }
    return prev
}