type RomanNumber = {
    value: number
    order: number
}

const romanNumbers: Record<string, RomanNumber> = {
    I: {
        value: 1,
        order: 1,
    },
    V: {
        value: 5,
        order: 2,
    },
    X: {
        value: 10,
        order: 3,
    },
    L: {
        value: 50,
        order: 4,
    },
    C: {
        value: 100,
        order: 5,
    },
    M: {
        value: 1000,
        order: 6,
    },
}

function calculateRomanNumberValue(romanNumbers: string): number {
    const firstRomanNumber = romanNumbers.substring(0, 1)
    const firstNumber = romanNumbers[firstRomanNumber];

    if (romanNumbers.length === 1) {
        return firstNumber.value
    }
 
    const secondRomanNumber = romanNumbers.substring(1, 2)
    const secondNumber = romanNumbers[secondRomanNumber];

    if (firstNumber.order < secondNumber.order) {
        return secondNumber.value - firstNumber.value
    }

    return secondNumber.value
}

function romanToInt(s: string): number {
    let value = 0;

    for (let i = 0; i < s.length; i++) {
        const previousLetter = i > 0 ? s[i -1] : ''
        const currentLetter = s[i]
        value += calculateRomanNumberValue(previousLetter + currentLetter);
    }

    return value;
};