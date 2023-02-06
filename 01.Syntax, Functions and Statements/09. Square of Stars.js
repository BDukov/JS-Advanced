function squareOfStars(input) {
    let number = input;
    let result = '';
    if (number != undefined) {
        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                result += '* ';
            }
            console.log(result.trim());
            result = '';
        }
    } else {
        number = 5;
        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                result += '*';
            }
            console.log(result.trim());
            result = '';
        }
    }
}
squareOfStars();