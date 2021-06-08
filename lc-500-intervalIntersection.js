/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    let i=0, j=0, k=0;
    let interval = []
    // console.log(A[i][0], k)
    while(i < A.length && j < B.length) {
        if(A[i][1] >= B[j][0] && A[i][0] <= B[j][1]) {
            interval[k] = []
            interval[k][0] = A[i][0] < B[j][0] ? B[j][0] : A[i][0]
            interval[k][1] = A[i][1] < B[j][1] ? A[i][1] : B[j][1]
            k++;
        }
        if(A[i][1] < B[j][1])
            i++
        else
            j++
    }
    return interval
};