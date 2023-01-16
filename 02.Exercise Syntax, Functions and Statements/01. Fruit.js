function fruit(typeOfFruit, weigthOfFruit, price) {

    let weigthInKg = weigthOfFruit / 1000;
    let finalPrice = weigthInKg * price;
    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);