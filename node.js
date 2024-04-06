// Import EncriptorJS library
import  Encriptor  from './encriptor.module.js'; // Assuming encriptor.js is in the same directory
console.log("Encriptor: ",Encriptor);

// Sample text to encrypt
const originalText = 'Hello, EncriptorJS!';
const key = 'mySecretKey123'; // Key for encryption

// Encrypt the text
const encryptedText = Encriptor.encrypt(originalText, key);
console.log('Encrypted Text:', encryptedText);

// Decrypt the encrypted text
const decryptedText = Encriptor.decrypt(encryptedText, key);
console.log('Decrypted Text:', decryptedText);

// Example of shuffling a string
const shuffledText = Encriptor.shuffleString(originalText, 42); // Using key 42
console.log('Shuffled Text:', shuffledText);
