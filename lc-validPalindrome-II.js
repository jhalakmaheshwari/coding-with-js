/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0, end = s.length - 1, flag = 0
    while(start <= end){
        if(s[start] !== s[end]){
            if(flag === 0){
                flag = 1
                start++
                continue
            }
            else if(flag === 1){
                end--
                start--
                flag = 2
                continue
            }
            else
                return false
        }
        start++;
        end--;
    }
    return true
};