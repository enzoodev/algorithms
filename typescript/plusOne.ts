function plusOne(digits: number[]): number[] {
    let formattedNumbers: string = '';

    for (let i = 0; i < digits.length; i++) {
        formattedNumbers += digits[i];
    }

    let parsedNumbers = BigInt(formattedNumbers);
    parsedNumbers++;

    const numbersAfterAddition = String(parsedNumbers)
    let result: number[] = [];

    for (let i = 0; i < numbersAfterAddition.length; i++) {
        result.push(Number(numbersAfterAddition[i]));
    }

    return result;
};

/*
function plusOne(digits: number[]): number[] {
    let isFinished = false;

    for (let i = 0; !isFinished; i++) {
        if (digits[digits.length - i - 1] < 9) {
            digits[digits.length - i - 1] = digits[digits.length - i - 1] + 1;
            isFinished = true;
        } else {
            const previousItem = digits[digits.length - i - 1 -1] ?? 0;
            const cutedArray = plusOne([...digits.slice(0, -2), previousItem]);
            digits = [...cutedArray, 0]
            isFinished = true;
        }
    }

    return digits;
};
*/