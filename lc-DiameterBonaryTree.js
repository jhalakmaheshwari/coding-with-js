/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPath = 0;
var diameterOfBinaryTree = function(root) {
    if(root === null)
        return 0
    maxPath = 0
    findLength(root)
    return maxPath-1
};

var findLength = (root) => {
    if(root === null)
        return 0
    let leftLength = findLength(root.left)
    let rightLength = findLength(root.right)
    let sum = 1+ leftLength + rightLength
    if(sum > maxPath)
        maxPath = sum
    return leftLength > rightLength ? leftLength+1 : rightLength+1
}