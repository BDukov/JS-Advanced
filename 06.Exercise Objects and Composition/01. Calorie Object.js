function calorieObject(input){

    // let output = {};
    
    // for (let i = 0; i < input.length; i++) {
    //   const el = input[i];
    //   const calories = input[i+ 1 ];
    //     if (i % 2 === 0){
    //         output[el] = Number(calories);
    //     }
    // }
    // return output; 
    return input.reduce((acc, current, index) => {
        if(index % 2 === 0) acc[current] = Number(input(index + 1));
        return acc;
    }, {});
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log(`------------`);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);