function sumFirstLast(arr) {
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());

    let sum = firstNum + lastNum;
    return sum;
}

sumFirstLast(['20', '30', '40']);