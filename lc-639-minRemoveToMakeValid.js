/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = []
    for(let i = 0; i<s.length; i++) {
        if(s[i] !== ')') {
            stack.push(s[i])
        }
        else {
            let str = ""
            let flag = false
            while(stack.length > 0){
                let popVal = stack.pop()
                str = popVal + str
                if(popVal === '('){
                    flag = true
                    break;
                }
            }
            if(flag)
                str += s[i]
            stack.push(str)
        }
    }
    return stack.filter(ch => ch !== '(').join('')
};