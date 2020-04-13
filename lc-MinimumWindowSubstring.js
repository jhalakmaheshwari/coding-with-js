/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let map = {}
    // making map for t characters
    t.split('').forEach(ch => map[ch] = (map[ch] || 0) + 1)

    let count = t.length
    let l = 0, r = 0
    let minLength = Infinity
    while(r<s.length)
    {   console.log(count)
    	if(map[s[r++]]-- > 0){
    		count--
    	}
		while(count === 0){
			if(r-l < minLength){
				minLength = r-l
				start = l
			}
			if(map[s[l++]]++ === 0)
				count++;
    	}
    }

    return minLength === Infinity ? '' : s.substr(start, minLength)

};