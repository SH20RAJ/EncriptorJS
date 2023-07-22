# EncriptorJS PHP Library

EncriptorJS is a text encryption library that allows users to encrypt and decrypt text using a substitution cipher. This PHP version of the library provides similar functionality to the JavaScript version, allowing you to add an additional layer of security to your sensitive text data.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Examples](#examples)
5. [Security Considerations](#security-considerations)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

EncriptorJS provides a simple implementation of a substitution cipher, where each character in the input text is replaced with a corresponding character from a substitution map. To increase security, you can add an optional key during encryption and decryption, making the substitution map more random and less predictable.

## Installation

To use EncriptorJS PHP library in your project, you can download the `encriptor.php` file and include it in your PHP script:

```php
require_once 'encriptor.php';
```

## Usage

To use the EncriptorJS PHP library, follow these steps:

1. Create an instance of the `SubstitutionCipher` class:

```php
$encriptor = new SubstitutionCipher();
```

2. Encrypt the text using the `encrypt` method:

```php
$encryptedText = $encriptor->encrypt($text, $key);
```

- `$text` is the text you want to encrypt.
- `$key` (optional) is a key used to shuffle the substitution map. It's recommended to use digits only.

3. Decrypt the encrypted text using the `decrypt` method:

```php
$decryptedText = $encriptor->decrypt($encryptedText, $key);
```

- `$encryptedText` is the text you want to decrypt.
- `$key` (optional) is the same key used during encryption.

## Examples

Here are some examples demonstrating how to use the EncriptorJS PHP library:

```php
require_once 'encriptor.php';

$encriptor = new SubstitutionCipher();

// Example 1: Basic encryption and decryption
$text = 'Hello, world!';
$key = '1234';

$encryptedText = $encriptor->encrypt($text, $key);
$decryptedText = $encriptor->decrypt($encryptedText, $key);

echo 'Original Text: ' . $text . PHP_EOL;
echo 'Encrypted Text: ' . $encryptedText . PHP_EOL;
echo 'Decrypted Text: ' . $decryptedText . PHP_EOL;
```

```php
// Example 2: Encryption without a key
$text = 'Lorem ipsum dolor sit amet';
$encryptedText = $encriptor->encrypt($text);

echo 'Original Text: ' . $text . PHP_EOL;
echo 'Encrypted Text: ' . $encryptedText . PHP_EOL;
```

## Security Considerations

The EncriptorJS PHP library provides a basic substitution cipher for educational and illustrative purposes. It should not be considered secure for protecting sensitive data in real-world scenarios.

If you require strong encryption for sensitive information, it is recommended to use established encryption libraries and standards, such as OpenSSL or the Sodium extension in PHP.

## Contributing

Contributions to the EncriptorJS PHP library are welcome! If you find any issues or have improvements, please feel free to submit a pull request.

## License

The EncriptorJS PHP library is open-source software licensed under the [MIT License](LICENSE).
