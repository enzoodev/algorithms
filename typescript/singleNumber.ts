function singleNumber(nums: number[]): number {
    const list: Record<number, [number, boolean]> = {};

    nums.forEach((item) => {
        if (list[item] !== undefined) {
            list[item][1] = false;
            return;
        }

        list[item] = [item, true]
    })

    return Object.values(list).find(item => !!item[1])?.[0] ?? 0;
};
