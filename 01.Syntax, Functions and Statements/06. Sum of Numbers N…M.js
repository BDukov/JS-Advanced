function sumOfNumbers(num1, num2){
    let firstDigit = Number(num1);
    let secondDigit = Number(num2);

    let result = 0;
    for (let i = firstDigit; i <= secondDigit; i++) {
        result += i;
    }
    return result;
}