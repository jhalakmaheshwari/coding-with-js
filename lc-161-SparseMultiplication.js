/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
    if(A[0].length !== B.length)
        return null
    let res = new Array(A.length)
    for(let i = 0; i < A.length; i++) {
        for(let k = 0; k < A[0].length; k++){
            if(res[i] === undefined)
                    res[i] = new Array(B[0].length)
            if(A[i][k] === 0) {
                if(res[i][k] === undefined)
                    res[i][k] = 0
                continue
            }
            
            for(let j = 0; j < B[0].length; j++) {
                if(res[i][j])
                    res[i][j] += A[i][k] * B[k][j]
                else
                    res[i][j] = A[i][k] * B[k][j]
            }
        }
    }
    return res
};