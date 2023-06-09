# EncriptorJS

EncriptorJS is a JavaScript text encryption library that allows you to securely encrypt and decrypt text. It provides a simple interface to convert your text into an encrypted form and optionally add a key for additional security. Only the correct key can be used to decrypt the text, ensuring that unauthorized access is prevented.

## Installation

You can use EncriptorJS by including the library in your JavaScript project or HTML file.

### In a JavaScript project

1. Download the EncriptorJS library file (`encriptor.js`) from the [GitHub repository](https://github.com/sh20raj/EncriptorJS).
2. Move the `encriptor.js` file into your project directory.
3. In your JavaScript file, import the EncriptorJS library:

   ```javascript
   import Encriptor from './encriptor.js';
   ```

### In an HTML file

1. Download the EncriptorJS library file (`encriptor.js`) from the [GitHub repository](https://github.com/sh20raj/encriptorjs).
2. Move the `encriptor.js` file into your project directory.
3. In your HTML file, add the following script tag:

   ```html
   <script src="encriptor.js"></script>
   ```
### or Using CDN

   ```html
   <script src="https://encriptorjs.sh20raj.repl.co/encriptor.js"></script>
   ```

## Usage

Once you have included the EncriptorJS library in your project, you can start encrypting and decrypting text.

### Encrypting Text

To encrypt text, use the `encrypt` method of the `Encriptor` object. Here's an example:

```javascript
const text = 'My name is Sh';
const key = '1234';

const encryptedText = Encriptor.encrypt(text, key);
console.log(encryptedText); // Outputs :- 'Kcdew9zdYidBf'
```

The `encrypt` method takes two parameters: the `text` you want to encrypt and an optional `key` for additional security. It is recommended to use only digits in the `key` parameter. It returns the encrypted text.

### Decrypting Text

To decrypt the encrypted text, use the `decrypt` method of the `Encriptor` object. Here's an example:

```javascript
const encryptedText = 'Kcdew9zdYidBf'; // Replace with the encrypted text
const key = '1234';
const decryptedText = Encriptor.decrypt(encryptedText, key);
console.log(decryptedText); // Output :- 'My name is Sh'
```

The `decrypt` method takes two parameters: the `encryptedText` you want to decrypt and the `key` used during encryption. It returns the decrypted text.

## Examples

You can find more examples in the [examples](https://replit.com/@SH20RAJ/EncriptorJS) directory of this repository. The examples demonstrate various use cases of the EncriptorJS library.

## License

This project is licensed under the [MIT License](./LICENSE).

## Refrences 

> https://dev.to/sh20raj/creating-a-custom-javascript-function-to-shuffle-strings-with-a-key-parameter-3c8a
> 
> https://chat.openai.com/share/3d0e44fe-963e-48d9-a5f0-547b5da11428