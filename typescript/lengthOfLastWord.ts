function lengthOfLastWord(s: string): number {
    let lastWordLength = 0;
    let isFoundLastWord = false;

    for (let i = 0; !isFoundLastWord; i++) {
        if (s[s.length - i - 1]?.trim().length > 0) {
            lastWordLength++;
        } else if(lastWordLength > 0) {
            isFoundLastWord = true;
        }
    }

    return lastWordLength;
};