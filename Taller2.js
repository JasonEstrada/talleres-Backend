function findMax(numbers) {
    let max = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; 
      }
    }
    return max;
  }
  
console.log(findMax([3, 17, -1, 4, -19])); 

  
function includes(numbers, number) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === number) {
        return true; 
      }
    }
    return false;
  }
  
console.log(includes([3, 17, -1, 4, -19], 2));
console.log(includes([3, 17, -1, 4, -19], 4));

  
function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  
console.log(sum([3, 17, -1, 4, -19]));

  
function missingNumbers(numbers) {
    const min = findMax(numbers.map(n => -n)) * -1;
    const max = findMax(numbers); 
    const missing = [];
  
    for (let i = min + 1; i < max; i++) {
      if (!numbers.includes(i)) {
        missing.push(i);
      }
    }
  
    return missing;
  }
  
console.log(missingNumbers([7, 2, 4, 6, 3, 9]));
  
