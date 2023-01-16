function biggerHalf(arr) {

    arr.sort((a, b) => a - b);

    const startIndex = Math.floor(arr.length / 2);

    const result = [];

    for (let index = startIndex; index < arr.length; index++) {
        result.push(arr[index]);

    }
    return result;
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);