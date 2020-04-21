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

var heapSort = (arr) => {
	const length = arr.length
	let i = Math.floor(arr.length/2)
	k = length - 1
	while(i >= 0){
		arr = heapify(arr, length, i)
		i--
	}

	while(k>=0){
		[arr[0], arr[k]] = [arr[k], arr[0]]
		heapify(arr, k, 0)
		k--
	}
	return arr

}