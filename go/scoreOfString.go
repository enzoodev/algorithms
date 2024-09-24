func scoreOfString(s string) int {
    result := 0;

    for i := 0; i < len(s); i++ {
        if (i < len(s) - 1) {
            currentValue := int(s[i]);
            previousValue := int(s[i + 1]);

            if currentValue > previousValue {
                result += currentValue - previousValue;
            } else {
                result += previousValue - currentValue;
            }
        }
    }

    return result;
}