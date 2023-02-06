function aggregateElements(arr) {

    function sumA() {
        let sum = 0;
        for (const num of arr) {
            sum += num;
        }
        return sum;
    }
    function sumB() {
        let sumInverse = 0;
        for (const num of arr) {
            sumInverse += 1 / num
        }
        return sumInverse;
    }
    function concat() {
        let concated = '';
        for (const num of arr) {
            concated += num;
        }
        return concated;
    }
    console.log(sumA());
    console.log(sumB());
    console.log(concat());
}
aggregateElements([1, 2, 3]);