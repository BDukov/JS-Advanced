function FirstFactorial(num) {
    let numsAsArray = [];
    for (let i = num; i > 1; i--) {
        let current = Number([i]);
        numsAsArray.push(current);
    }
    let result = numsAsArray.reduce((acc, curr) => acc * curr, 1);
    return result;
}

// keep this function call here 
console.log(FirstFactorial(4));