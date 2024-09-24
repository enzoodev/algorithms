function scoreOfString(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1) {
            const currentValue = s[i].charCodeAt(0);
            const previousValue = s[i + 1].charCodeAt(0);

            if (currentValue > previousValue) {
                result += currentValue - previousValue;
            } else {
                result += previousValue - currentValue;
            }
        }
    }

    return result;
};