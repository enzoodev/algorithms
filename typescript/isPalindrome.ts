function reverseWord(word: string): string {
  let reversedWord = '';

  for (var i = 0; i < word.length; i++) {
    const reversedLetter = word[word.length - i - 1];
    reversedWord += reversedLetter;
  }

  return reversedWord;
}

function isPalindrome(x: number): boolean {
    const reversedString = reverseWord(x.toString())
    const reversedNumber = Number(reversedString)

    return reversedNumber === x
};