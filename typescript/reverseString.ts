/* 
Reverse the words in a string. e.g. hello world -> olleh dlrow
*/

function reverseWord(word: string): string {
  let reversedWord = '';

  for (var i = 0; i < word.length; i++) {
    const reversedLetter = word[word.length - i - 1];
    reversedWord += reversedLetter;
  }

  return reversedWord;
}

function reverseWords(phrase: string): string {
  let reversedPhrase = '';
  const words = phrase.split(' ');

  words.forEach(value => {
    reversedPhrase += ` ${reverseWord(value)}`;
  });

  return reversedPhrase;
}

const myString = 'Hello World';
const reversedString = reverseWords(myString);
console.log(reversedString);
