/**
 * This function generates a string with a specific pattern based on the input string.
 * 
 * @param {String} str - The input string.
 * @returns {String} - The result string with the specified pattern.
 */
const accum = (str) => {
  // let x = "";
  // for (let i = 0; i < str.length; i++) {
  //   x += str[i].toUpperCase();
  //   x += str[i].repeat(i);
  //   i < str.length - 1 ? (x += "-") : "";
  // }

  // return x;

  /**
   *  oneline solution
   */
  return str.toLowerCase().split('').map((char, i) => char.toUpperCase() + char.repeat(i)).join('-')
};

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
