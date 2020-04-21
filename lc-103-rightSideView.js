/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(root === null)
        return []
    let arr = []
    
    let depth = 1
    let bMap = new Map()
    arr.push([root, depth])
    while(arr.length > 0){
        let node = arr.pop()
        if(node[0] !== null){
            let size = node[1]
            if(bMap.get(size) === undefined || bMap.get(size) === undefined)
                bMap.set(size, node[0])
            arr.push([node[0].left, ++node[1]])
            arr.push([node[0].right, node[1]])
        }
    }
    for (let value of bMap.values()) {
        arr.push(value.val)
    }
    return arr
}