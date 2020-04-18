/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1
    while(start <= end) {
        // MID
        let mid = Math.ceil((start + end)/2)
        if(nums[mid] === target)
            return mid
        else if(nums[mid] >= nums[start]) {
            if(target <= nums[mid] && target >= nums[start]) {
                end = mid - 1
            }
            else
                start = mid + 1
        }
        else {
            if(target <= nums[end] && nums[mid] < target){
               start = mid + 1
            }
            else
                end = mid - 1
        }
    }
    return -1
};