var multiply = function(num1, num2) {
  const result = new Array(num1.length + num2.length).fill(0);
  for (let i = num1.length - 1; i >= 0; i--) {

    for (let j = num2.length - 1; j >= 0; j--) {

      const sum = num1[i] * num2[j] + result[i + j + 1];
      result[i + j] += Math.floor(sum / 10);
      result[i + j + 1] = sum % 10;
    
    }
  }
  return result.join('').replace(/^0+(?!$)/, '');
};