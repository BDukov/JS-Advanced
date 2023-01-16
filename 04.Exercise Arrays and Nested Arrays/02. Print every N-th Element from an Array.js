function printNth(arr, step) {
    // const newArr = [];
    // for (let i = 0; i < arr.length; i += step) {
    //     newArr.push(arr[i]);
    // }
    // return newArr;
    return arr.filter((_, index) => index % step == 0);
    // '_' - елемент който няма да се използва по-надолу в кода;
}
printNth(['5',
    '20',
    '31',
    '4',
    '20'],
    2);
console.log(`-----------`);
printNth(['dsa',
    'asd',
    'test',
    'tset'],
    2);
console.log(`-----------`);
printNth(['1',
    '2',
    '3',
    '4',
    '5'],
    6);