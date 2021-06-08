var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i<nums.length; i++)
    {
        const left = target - nums[i]
        if(map[nums[i]]!==undefined)
            return [map[nums[i]], i]
        else
            map[left] = i
    }
    return []
};
