function sumTable() {
    // let sum = 0;
    // let digits = document.getElementsByTagName('tr');
    // for (let i = 1; i < digits.length - 1; i++) {
    //     const element = digits[i];
    //     let num = Array.from(element);
    //     console.log(num);
    //     sum += Number(element);        
    // }
    // console.log(sum);
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let sum = Array.from(costElements).reduce((a, x) => {
        let currentValue = Number(x.textContent) || 0;
        return a + currentValue
    }, 0);

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
}