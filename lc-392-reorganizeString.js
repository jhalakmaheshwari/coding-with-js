/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let N = S.length
    let map = {};
    for (let idx = 0, len = S.length; idx < len; idx++) {
        let char = S[idx];
        map[char] = (map[char] || 0) + 1;
    }
  // sorted array based on frequency count - max 26 entries => O(1) => constant time
    // SO COOL SORT
    let sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
    
    let max = (N+1)/2
    if(map[sorted[0]] > max) {
        return ""
    }
    
    let result = [];
    let position = 0;
    for(let i = 0; i < sorted.length; i++) {
        
        for(let j = 0; j < map[sorted[i]]; j++){
            if(position >= N){
                position = 1
            }
            result[position] = sorted[i]
            position+=2
        }
    }
    
    return result.join('')
};
