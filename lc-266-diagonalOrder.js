/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  if(!matrix.length) return matrix
  const R = matrix.length;
  const C = matrix[0].length;
  const N = R * C;
  const res = [];
  
  let r = 0, c = 0;
  let up = true;
  while(res.length < N){
    const curr = matrix[r][c]
    res.push(curr)
    if(up){ // going up
      if(c === C-1){ // last column is met
        up = false
        r++ // go up one row
      }else if(r === 0){ // first row
        up = false;
        c++ // go up one column
      }else{ // continue going up
        r--
        c++
      }
    }else{ // doing down
      if(r === R-1){ // last row
        up = true
        c++ // go up one column
      }else if(c === 0){ // first column
        up = true
        r++ // go up one row
      }else{ // continue goind down
        r++
        c--
      }
    }
  }
  return res
};