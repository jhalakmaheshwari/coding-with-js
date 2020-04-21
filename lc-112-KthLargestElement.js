/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// THIS WAY is normal Sort
// var findKthLargest = function(nums, k) {
//     return nums.sort((a, b) => a - b)[nums.length - k]
// };

// HEAP
var heapify = (arr, length, i) => {
	let largest = i
	let left = 2 * i + 1
	let right = left + 1

	if(left < length && arr[left] > arr[largest]){
		largest = left
	}

	if(right < length && arr[right] > arr[largest])
		largest = right

	// swap
	if(largest !== i){
		const temp = arr[i]
		arr[i] = arr[largest]
		arr[largest] = temp

		heapify(arr, length, largest)
	}
	return arr
}

var findKthLargest = function(nums, kLargest) {
    const length = nums.length
	let i = Math.floor(nums.length/2)
	let k = length - 1
	while(i >= 0){
		heapify(nums, length, i)
		i--
	}
	while(k>=0){
		[nums[0], nums[k]] = [nums[k], nums[0]]
		heapify(nums, k, 0)
		k--
	}
	return nums[nums.length - kLargest]
};