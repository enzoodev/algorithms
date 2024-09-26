function isAnagram(s: string, t: string): boolean {
    if (t.length > s.length) {
        return false;
    }

    const letters = s.split('');

    for (let i = 0; i < s.length; i++) {
        const index = letters.findIndex((item) => item === t[i])

        if (index !== -1) {
            letters.splice(index, 1);
        }
    }

    return letters.length === 0;
};