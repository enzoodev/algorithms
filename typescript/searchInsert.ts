function searchInsert(nums: number[], target: number): number {
    let result = 0;

    nums.forEach((item, index, array) => {
        if (result !== 0) {
            return;
        }

        if (item < target) {
            if (array.length > index + 1) {
                if (item < target && array[index + 1] >= target) {
                    result = index + 1
                }

                return;
            }

            result = array.length
        }
    })

    return result;
};