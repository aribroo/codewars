class StringUtils {
  /**
   * Capitalizes the first letter of each word in a given string.
   * 
   * @param {string} name - The input string to be capitalized.
   * @returns {string} - The string with the first letter of each word capitalized.
   */
  static toCapitalize(name) {
    const words = name.split(' ');

    const capitalizeWord = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return capitalizeWord.join(' ');
  }
}

/**
 * Greets a person with a capitalized name or defaults to "World" if no name is provided.
 * 
 * @param {string} name - The name to be greeted.
 * @returns {string} - The greeting message.
 */
const sayHello = (name) => {
  if (name && typeof name === 'string') {
    const words = StringUtils.toCapitalize(name);

    return `Hello, ${words}`;
  } else {
    return `Hello, World`;
  }
}


console.log(sayHello('Rifki'))
console.log(sayHello('dImaS'))
console.log(sayHello('jOko kOcAK'))
console.log(sayHello())
console.log(sayHello(''))
console.log(sayHello(1))
console.log(sayHello('1'))

