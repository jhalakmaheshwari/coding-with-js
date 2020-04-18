/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

var kClosest = function(points, K) {
    let result = []
    for(let i = 0; i<points.length; i++){
        const eucledianDist = Math.pow(points[i][0],2) + Math.pow(points[i][1],2)
        result.push([eucledianDist, points[i]])
    }
    
    const finalRes = result.sort((a,b) => 
        (a[0] < b[0]) ? -1 : 1
    ).slice(0, K).map(a => a[1])
    return finalRes
};