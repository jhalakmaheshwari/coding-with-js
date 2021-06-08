/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    
    // Stack way
    let stack = new Array()
    let prevTime = 0
    let res = []
    for(let i = 0; i < logs.length; i++){
        let info = logs[i].split(':')
        let jobId = parseInt(info[0])
        let timeValue = parseInt(info[2])
        if(res.length > 0){
            res[stack[stack.length - 1]] += timeValue - prevTime
        }
        
        if(info[1] === 'start'){
            stack.push(jobId)
            prevTime = timeValue
            if(res[jobId] === undefined)
                res[jobId] = 0
        }
        else {
            res[stack[stack.length - 1]]++
            stack.pop()
            prevTime = timeValue + 1
        }
    }
    return res
};