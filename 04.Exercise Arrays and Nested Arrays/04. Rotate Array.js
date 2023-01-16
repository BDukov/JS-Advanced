function rotateAttray(arr, number) {

    for (let i = 0; i < number; i++) {
        // let lastNum = arr[arr.length - 1];
        // arr.pop(arr.length - 1);
        // arr.unshift(lastNum)
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
rotateAttray(['1', '2', '3', '4'], 2);
console.log(`------------`);
rotateAttray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);