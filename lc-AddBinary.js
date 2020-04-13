/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let i = a.length - 1
	let j = b.length - 1
	if(i<j)
		addBinary(b, a)
	let larger = i > j ? i+1 : j+1
	const result = new Array(larger + 1).fill(0);
	let carry = 0;
	while(larger >= 0) {
		if(a[i] === "1")
			carry++
		if(b[j] === "1")
			carry++

		if(carry % 2 === 1)
			result[larger] = 1
		else
			result[larger] = 0
		carry = Math.floor(carry/2)
        larger--;
        i--;
        j--;
	}
	return result.join('').replace(/^0+(?!$)/, '');
};