/**
 * EncriptorJS is a JavaScript text encryption library that allows users to encrypt and decrypt text using a substitution cipher.
 * It provides an additional layer of security by allowing users to add a key (preferably consisting of digits) during encryption and decryption.
 */
const substitutionCipher = {
  // The original alphabet consisting of lowercase letters, uppercase letters, digits, and a space character
  alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ',

  // The substitution map that defines the mapping for each character in the alphabet
  substitutionMap: 'xmbpcqsetnvwzorgadihfjlkuyXMBPCQSETNVWZORGADIHFJLKUY9876543210 ',

  /**
   * Encrypts the given text using a substitution cipher.
   * @param {string} text - The text to be encrypted.
   * @param {string} key - The optional key used for shuffling the substitution map. Recommended to use digits only.
   * @returns {string} - The encrypted text.
   */
  encrypt: function(text, key) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = this.alphabet.indexOf(char);
      if (index !== -1) {
        // Shuffle the substitution map using the key
        const substitutionMap2 = this.shuffleString(this.substitutionMap, key);
        const encryptedChar = substitutionMap2[index];
        encryptedText += encryptedChar;
      } else {
        // If the character is not found in the alphabet, add it as is
        encryptedText += char;
      }
    }
    return encryptedText;
  },

  /**
   * Decrypts the given encrypted text using a substitution cipher.
   * @param {string} encryptedText - The encrypted text to be decrypted.
   * @param {string} key - The optional key used for shuffling the substitution map. Recommended to use digits only.
   * @returns {string} - The decrypted text.
   */
  decrypt: function(encryptedText, key) {
    let decryptedText = '';
    for (let i = 0; i < encryptedText.length; i++) {
      const char = encryptedText[i];
      // Shuffle the substitution map using the key
      const substitutionMap2 = this.shuffleString(this.substitutionMap, key);
      const index = substitutionMap2.indexOf(char);
      if (index !== -1) {
        const decryptedChar = this.alphabet[index];
        decryptedText += decryptedChar;
      } else {
        decryptedText += char;
      }
    }
    return decryptedText;
  },

  fnv1a: function(text) {
  const FNV_OFFSET_BASIS = 0x811C9DC5;
  const FNV_PRIME = 0x01000193;

  let hash = FNV_OFFSET_BASIS;

  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash *= FNV_PRIME;
  }

  // Convert the hash to a hexadecimal string
  hash = hash >>> 0; // Ensure unsigned 32-bit integer
  hash = hash.toString(16).padStart(8, '0');

  return hash;
},
  shuffleString: function(text, key = 20) {
  const array = text.split('');
  let seed = key;
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
},


  
  shuffle: function (inputString) {
  // Convert the string into an array of characters
  var charArray = inputString.split("");
  
  // Shuffle the array of characters
  for (var i = charArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
  }
  
  // Convert the shuffled array back into a string
  var shuffledString = charArray.join("");
  
  return shuffledString;
}


};

/**
 * Shuffles the characters in the given string using a Fisher-Yates shuffle algorithm.
 * @param {string} text - The string to be shuffled.
 * @param {number} key - The optional key used as a seed for shuffling. Recommended to use digits only.
 * @returns {string} - The shuffled string.
 */


// Expose the substitutionCipher object as Encriptor
const Encriptor = substitutionCipher;
export default Encriptor;
// if (typeof module !== 'undefined' && module.exports) {
//   module.exports = {Encriptor};
// }
/**
 * EncriptorJS is a JavaScript text encryption library that allows users to encrypt and decrypt text using a substitution cipher.
 * It provides an additional layer of security by allowing users to add a key (preferably consisting of digits) during encryption and decryption.
 *
 * Usage:
 *  - To encrypt text, use the `encrypt` method of the `Encriptor` object.
 *  - To decrypt text, use the `decrypt` method of the `Encriptor` object.
 */

/* Additional security by using <script src="https://cdnjs.cloudflare.com/ajax/libs/js-sha256/0.9.0/sha256.min.js"></script>

const text = 'Hello, world!';
const hash = sha256(text);
console.log(hash); // Outputs the SHA-256 hash

---

btoa() /converts to base64
atob() reverse function...

*/

