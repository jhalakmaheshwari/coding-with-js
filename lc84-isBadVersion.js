/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let mid = Math.ceil(n/2), start = 0, end = n
        while(mid > start && mid < end){
         if(!isBadVersion(mid)){
             start = mid
             mid = Math.ceil((end+start)/2)
         }
        else{
            end = mid
            mid = Math.ceil((start+end)/2)
        }
        }
        return end
    };
};