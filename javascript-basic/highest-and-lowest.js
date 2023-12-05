/**
 * This function takes a string of numbers, finds the highest and lowest values,
 * and returns a string containing both values.
 *
 * @param {String} strOfNumbers - The input string of numbers.
 * @returns {String} - A string containing the highest and lowest values.
 */
const highAndLow = (strOfNumbers) => {
  const numbersArray = strOfNumbers.split(" ")
  
  const maxNumber = Math.max(...numbersArray);
  const minNumber = Math.min(...numbersArray);

  return `${maxNumber.toString()} ${minNumber.toString()}`;
};

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
