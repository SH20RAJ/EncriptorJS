/**
 * EncriptorJS is a JavaScript text encryption library that allows users to encrypt and decrypt text using a substitution cipher.
 * It provides an additional layer of security by allowing users to add a key (preferably consisting of digits) during encryption and decryption.
 */
const substitutionCipher = {
  // The original alphabet consisting of lowercase letters, uppercase letters, digits, and a space character
  alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ',

  // The substitution map that defines the mapping for each character in the alphabet
  substitutionMap: 'xmbpcqsetnvwzorgadihfjlkuyXMBPCQSETNVWZORGADIHFJLKUY9876543210%',

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
        const substitutionMap2 = shuffleString(this.substitutionMap, key);
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
      const substitutionMap2 = shuffleString(this.substitutionMap, key);
      const index = substitutionMap2.indexOf(char);
      if (index !== -1) {
        const decryptedChar = this.alphabet[index];
        decryptedText += decryptedChar;
      } else {
        decryptedText += char;
      }
    }
    return decryptedText;
  }
};

/**
 * Shuffles the characters in the given string using a Fisher-Yates shuffle algorithm.
 * @param {string} text - The string to be shuffled.
 * @param {number} key - The optional key used as a seed for shuffling. Recommended to use digits only.
 * @returns {string} - The shuffled string.
 */
function shuffleString(text, key = 20) {
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
}

// Expose the substitutionCipher object as Encriptor
const Encriptor = substitutionCipher;

/**
 * EncriptorJS is a JavaScript text encryption library that allows users to encrypt and decrypt text using a substitution cipher.
 * It provides an additional layer of security by allowing users to add a key (preferably consisting of digits) during encryption and decryption.
 *
 * Usage:
 *  - To encrypt text, use the `encrypt` method of the `Encriptor` object.
 *  - To decrypt text, use the `decrypt` method of the `Encriptor` object.
 */
