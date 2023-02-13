function biggestElement(arr) {
    let result = [];
    let getMax = (a, b) => Math.max(a, b);
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].reduce(getMax));
    }
    result = result.reduce(getMax);
    console.log(result);
}

biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]
);