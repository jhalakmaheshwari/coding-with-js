/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    // if (s1.count('x')+s2.count('x')) % 2 == 1 or (s1.count('y')+s2.count('y'))%2 == 1:
    //         return -1
    let xy = 0, s2XCount = 0, s2YCount = 0
    let yx = 0, s1XCount = 0, s1YCount = 0
    for(let i = 0; i<s1.length; i++) {
        if(s1[i] === 'x' && s2[i] === 'y')
            xy++
        if(s1[i] === 'y' && s2[i] === 'x')
            yx++
        if(s1[i] === 'x')
            s1XCount++
        else
            s1YCount++
        if(s2[i] === 'x')
            s2XCount++
        else
            s2YCount++
    }
    if((s1XCount + s2XCount)%2 === 1 || (s1YCount + s2YCount)%2 === 1)
        return -1
    let freqXY = Math.floor(xy/2)
    let freqYX = Math.floor(yx/2)
    return freqXY + freqYX + xy - (freqXY*2) + yx - (freqYX * 2)
};