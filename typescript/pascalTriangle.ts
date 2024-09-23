function pascalTriangle(numRows: number): number[][] {
    let result: number[][] = [];

    for (let index = 0; index < numRows; index++) {
        result.push(Array.from({ length: index + 1 }).map((_, itemIndex, array) => {
            const previousRow = result[index - 1]

            if (!previousRow || previousRow.length === 1) {
                return 1
            }

            if (itemIndex === 0 || itemIndex === array.length - 1) {
                return 1
            }

           return previousRow[itemIndex] + previousRow[itemIndex -1];
        }))
    }

    return result
};