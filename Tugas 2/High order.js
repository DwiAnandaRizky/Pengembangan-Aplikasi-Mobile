const arrayOfNumbers = [5, 6, 7, 8];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});

console.log(sum); // 10