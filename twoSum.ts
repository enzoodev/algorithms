function twoSum(nums: number[], target: number): number[] {
    let result: Array<number> = [];

    nums.forEach((item, index, array) => {
        const currentValue = item;
        const nextIndex = index + 1;
        const nextValue = array[nextIndex];
        const sum = currentValue + nextValue;

        if (sum === target) {
            result = [index, nextIndex]
        }
    })

    return result
};