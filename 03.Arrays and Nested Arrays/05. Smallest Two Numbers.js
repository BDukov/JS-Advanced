function smallestTwo(arr) {
    let theSmallest = arr.sort((a, b) => (a - b)).slice(0, 2).join('\n');
    console.log(theSmallest);
}
smallestTwo([30, 15, 50, 5]);