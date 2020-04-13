/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => 
        a[0] < b[0] ? -1 : 1
    )
    const mergeResult = []
    let i = -1
    intervals.forEach(interval => {
        if(mergeResult.length === 0){
            mergeResult.push(interval)
            i++;
        }
        else{
            if(mergeResult[i][1] >= interval[0]){
                mergeResult[i][1] = Math.max(interval[1], mergeResult[i][1]);
            }
            else{
                mergeResult.push(interval)
                i++
            }
        }
    })
    
    return mergeResult;
};