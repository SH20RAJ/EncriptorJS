<?php
/**
 * Substitution cipher implementation in PHP
 */
class SubstitutionCipher
{
    // The original alphabet consisting of lowercase letters, uppercase letters, digits, and a space character
    private $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
    
    // The substitution map that defines the mapping for each character in the alphabet
    private $substitutionMap = 'xmbpcqsetnvwzorgadihfjlkuyXMBPCQSETNVWZORGADIHFJLKUY9876543210 ';

    /**
     * Encrypts the given text using a substitution cipher.
     *
     * @param string $text - The text to be encrypted.
     * @param string $key  - The optional key used for shuffling the substitution map. Recommended to use digits only.
     *
     * @return string - The encrypted text.
     */
    public function encrypt($text, $key = '')
    {
        $encryptedText = '';
        for ($i = 0; $i < strlen($text); $i++) {
            $char = $text[$i];
            $index = strpos($this->alphabet, $char);
            if ($index !== false) {
                // Shuffle the substitution map using the key
                $substitutionMap2 = $this->shuffleString($this->substitutionMap, $key);
                $encryptedChar = $substitutionMap2[$index];
                $encryptedText .= $encryptedChar;
            } else {
                // If the character is not found in the alphabet, add it as is
                $encryptedText .= $char;
            }
        }
        return $encryptedText;
    }

    /**
     * Decrypts the given encrypted text using a substitution cipher.
     *
     * @param string $encryptedText - The encrypted text to be decrypted.
     * @param string $key           - The optional key used for shuffling the substitution map. Recommended to use digits only.
     *
     * @return string - The decrypted text.
     */
    public function decrypt($encryptedText, $key = '')
    {
        $decryptedText = '';
        for ($i = 0; $i < strlen($encryptedText); $i++) {
            $char = $encryptedText[$i];
            // Shuffle the substitution map using the key
            $substitutionMap2 = $this->shuffleString($this->substitutionMap, $key);
            $index = strpos($substitutionMap2, $char);
            if ($index !== false) {
                $decryptedChar = $this->alphabet[$index];
                $decryptedText .= $decryptedChar;
            } else {
                $decryptedText .= $char;
            }
        }
        return $decryptedText;
    }

    private function shuffleString($text, $key = 20)
    {
        $array = str_split($text);
        $seed = $key;
        $random = function () use (&$seed) {
            $x = sin($seed++) * 10000;
            return $x - floor($x);
        };

        for ($i = count($array) - 1; $i > 0; $i--) {
            $j = floor($random() * ($i + 1));
            // Swap elements at indices i and j
            [$array[$i], $array[$j]] = [$array[$j], $array[$i]];
        }
        return implode('', $array);
    }
}

// Example usage:
$encriptor = new SubstitutionCipher();

/*
$text = 'Hello, world!';
$encryptedText = $encriptor->encrypt($text);
$decryptedText = $encriptor->decrypt($encryptedText);

echo 'Original Text: ' . $text . '<br>';
echo 'Encrypted Text: ' . $encryptedText . '<br>';
echo 'Decrypted Text: ' . $decryptedText . '<br>';
*/
