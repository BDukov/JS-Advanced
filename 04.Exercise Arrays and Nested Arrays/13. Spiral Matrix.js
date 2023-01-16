function spiralMatrix(row, col) {
    let num = 1;
    let finalArray = [];
    for (let i = 0; i < row; i++) {
        let currArray = [];
        currArray.length = col;
        finalArray.push(currArray);
    }
    let startRowIndex = 0;
    let startColIndex = 0;

    while (startRowIndex < row && startColIndex < col) {
        for (let j = startColIndex; j < col; ++j) {
            finalArray[startRowIndex][j] = num++;
        }
        startRowIndex++;
        for (let i = startRowIndex; i < row; i++) {
            finalArray[i][col - 1] = num++;
        }
        col--;

        if (startRowIndex < row) {
            for (let i = col - 1; i >= startColIndex; --i) {
                finalArray[row - 1][i] = num++;
            }
            row--;
        }

        if (startRowIndex < col) {
            for (let i = row - 1; i >= startRowIndex; --i) {
                finalArray[i][startColIndex] = num++;
            }
            startColIndex++;
        }
    }
    finalArray.forEach((row) => console.log(row.join(' ')));
}
spiralMatrix(5, 5);
console.log(`------`);
spiralMatrix(3, 3);
// output
// 1 2 3
// 8 9 4
// 7 6 5
