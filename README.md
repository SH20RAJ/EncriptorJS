# EncriptorJS

[![](https://data.jsdelivr.com/v1/package/gh/sh20raj/EncriptorJS/badge)](https://www.jsdelivr.com/package/gh/sh20raj/EncriptorJS)
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FEncriptorJS%2F&labelColor=%23f47373&countColor=%23dce775&style=flat)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2FSH20RAJ%2FEncriptorJS%2F)

EncriptorJS is a JavaScript text encryption library that allows you to securely encrypt and decrypt text. It provides a simple interface to convert your text into an encrypted form and optionally add a key for additional security. Only the correct key can be used to decrypt the text, ensuring that unauthorized access is prevented.

## Installation

You can use EncriptorJS by including the library in your JavaScript project or HTML file.

### In a JavaScript project

1. Download the EncriptorJS library file (`encriptor.js`) from the [GitHub repository](https://github.com/sh20raj/EncriptorJS).
2. Move the `encriptor.js` file into your project directory.
3. In your JavaScript file, import the EncriptorJS library:


```javascript
   import Encriptor from './encriptor.module.js';
```
or Use


```bash
npm i encriptorjs
```

```javascript
   import Encriptor from 'encriptorjs';
```

### In an HTML file

1. Download the EncriptorJS library file (`encriptor.js`) from the [GitHub repository](https://github.com/sh20raj/EncriptorJS) or [NPMJS](https://www.npmjs.com/package/encriptorjs).
2. Move the `encriptor.js` file into your project directory.
3. In your HTML file, add the following script tag:

   ```html
   <script src="encriptor.js"></script>
   ```
   or
   ```html
   <script src="https://cdn.jsdelivr.net/gh/SH20RAJ/EncriptorJS@main/encriptor.min.js"></script>
   ```

## Usage

Once you have included the EncriptorJS library in your project, you can start encrypting and decrypting text.

### Encrypting Text

To encrypt text, use the `encrypt` method of the `Encriptor` object. Here's an example:

```javascript
const text = 'My name is Sh';
const key = '1234';

const encryptedText = Encriptor.encrypt(text, key);
console.log(encryptedText); // Outputs: 'Kcdew9zdYidBf'
```

The `encrypt` method takes two parameters: the `text` you want to encrypt and an optional `key` for additional security. It is recommended to use only digits in the `key` parameter. It returns the encrypted text.

### Decrypting Text

To decrypt the encrypted text, use the `decrypt` method of the `Encriptor` object. Here's an example:

```javascript
const encryptedText = 'Kcdew9zdYidBf'; // Replace with the encrypted text
const key = '1234';
const decryptedText = Encriptor.decrypt(encryptedText, key);
console.log(decryptedText); // Outputs: 'My name is Sh'
```

The `decrypt` method takes two parameters: the `encryptedText` you want to decrypt and the `key` used during encryption. It returns the decrypted text.

### Shuffling Strings

The EncriptorJS library also provides a utility function called `shuffleString` that can be used to shuffle strings using a key. Here's how you can use it:

```javascript
const text = 'Hello, World!';
const shuffledText = Encriptor.shuffleString(text, 42);
console.log(shuffledText); // Outputs a shuffled version of the input string
```

The `shuffleString` function takes a `text` parameter as the input string and an optional `key` parameter used to initialize the random number generator. By using the same key, you can obtain the same shuffled result. This function can be used for encryption purposes or to shuffle strings for other applications.

Please note that the `shuffleString` function alone does not provide strong encryption. For secure encryption, it is recommended to use well-established encryption algorithms and libraries designed for that purpose.

`Encriptor.shuffle(text)` always gives different shuffled pattern.

## Examples

You can find more examples in the [examples](https://replit.com/@SH20RAJ/EncriptorJS) directory of this repository. The examples demonstrate various use cases of the EncriptorJS library.

## License

This project is licensed under the [MIT License](./LICENSE).

## Refrences 

> https://dev.to/sh20raj/creating-a-custom-javascript-function-to-shuffle-strings-with-a-key-parameter-3c8a
> https://dev.to/sh20raj/introducing-encriptorjs-secure-text-encryption-and-decryption-in-javascript-a-jwt-easy-to-use-alternative-l02
