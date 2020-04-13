var intersection = function(nums1, nums2) {
    const found = [...new Set(nums1.filter(r => {
        if(nums2.indexOf(r) >= 0)
            return r || r === 0
    }))]
    return found
};

// Another Solution

let intersection = function(nums1, nums2) {
  let firstSet = new Set();

  for (let num of nums1) {
    firstSet.add(num);
  }

  let intersectionSet = new Set();

  for (let num of nums2) {
    if (firstSet.has(num)) {
      intersectionSet.add(num);
    }
  }

  return Array.from(intersectionSet);
};