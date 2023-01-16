function evenPositionElement(arr) {
    let result = '';
    for (let index = 0; index < arr.length; index += 2) {
        result += arr[index] + ' ';
    }
    console.log(result);
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);