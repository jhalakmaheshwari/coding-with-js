/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let pLen = p.length, oPut = []
    if(s.length < pLen)
        return oPut
    let pMap = new Map();
    let sMap = new Map();
    for(let i = 0; i < pLen; i++) {
        if(pMap.has(p[i]))
            pMap.set(p[i], pMap.get(p[i]) + 1)
        else
            pMap.set(p[i], 1)
    }
    
    for(let i = 0; i < s.length; i++) {
        if(sMap.has(s[i]))
            sMap.set(s[i], sMap.get(s[i]) + 1)
        else
            sMap.set(s[i], 1)
        
        if(i >= pLen) {
            if(sMap.get(s[i - pLen]) === 1)
                sMap.delete(s[i - pLen])
            else
                sMap.set(s[i - pLen], sMap.get(s[i - pLen]) - 1)
        }
        
        if(match(sMap, pMap))
            oPut.push(i-pLen+1)
    }
    return oPut
};

var match = (sMap, pMap) => {
    var testVal;
    if (sMap.size !== pMap.size) {
        return false;
    }
    for (let [key, val] of sMap) {
        testVal = pMap.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !pMap.has(key))) {
            return false;
        }
    }
    return true;
}