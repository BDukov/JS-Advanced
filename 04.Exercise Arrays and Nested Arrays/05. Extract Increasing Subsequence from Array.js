function extractIncreasingSubFromArr(numbers) {
    // let biggestNumber = numbers.shift();
    // const finalResult = [biggestNumber];

    // for (const number of numbers) {
    //     if(number >= biggestNumber){
    //         biggestNumber = number;
    //         finalResult.push(number);
    //     }
    // }
    // return finalResult;
    let finalResult = [];
    let biggestNumber = numbers[0];
    finalResult = numbers.reduce((acc, currEl) => {
        if (biggestNumber <= currEl) {
            acc.push(currEl)
            biggestNumber = currEl;
        }
        return acc;
    }, [])
    console.log(finalResult);
}
extractIncreasingSubFromArr([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
console.log(`-------------`);
extractIncreasingSubFromArr([1,
    2,
    3,
    4]
);
console.log(`-------------`);
extractIncreasingSubFromArr([20,
    3,
    2,
    15,
    6,
    1]
);