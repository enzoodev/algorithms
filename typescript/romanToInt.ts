type RomanNumber = {
    value: number
    order: number
}

type CalculateRomanNumberValue = {
    previous: string | undefined
    current: string
    next: string | undefined
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
    D: {
        value: 500,
        order: 6,
    },
    M: {
        value: 1000,
        order: 7,
    },
}

function calculateRomanNumberValue({
    previous,
    current,
    next,
}: CalculateRomanNumberValue): number {
    const currentNumber = romanNumbers[current];

    if (next) {
        const nextNumber = romanNumbers[next];

        if (nextNumber.order > currentNumber.order) {
            return 0;
        }
    }

    if (!previous) {
        return currentNumber.value
    }
 
    const previosNumber = romanNumbers[previous];

    if (previosNumber.order < currentNumber.order) {
        return currentNumber.value - previosNumber.value
    }

    return currentNumber.value
}

function romanToInt(s: string): number {
    let value = 0;

    for (let i = 0; i < s.length; i++) {
        const romanNumberValue = calculateRomanNumberValue({
            previous: i > 0 ? s[i -1] : undefined,
            current: s[i],
            next: s.length > i + 1 ? s[i + 1] : undefined,
        });
  
        value += romanNumberValue;
    }

    return value;
};