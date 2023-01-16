function SortingNumbers(arr) {
    arr = arr.sort((a, b) => a - b);
    let newArr = [];
    while (arr.length !== 0) {
        newArr.push(arr.shift());
        newArr.push(arr.pop());
    }
    return newArr;
}
SortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// return => [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]