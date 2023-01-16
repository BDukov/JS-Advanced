function positiveNegativeNumbers(arr) {

    const result = [];

    for (const element of arr) {
        if (element < 0) {
            result.unshift(element);
        }
    }

    for (const el of arr) {
        if (el >= 0) {
            result.push(el)
        }
    }
    console.log(result);
}
positiveNegativeNumbers([7, -2, 8, 9]);
positiveNegativeNumbers([3, -2, 0, -1]);