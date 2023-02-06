function add(number){

   let sum = function (num) {
    number += num;
    return sum;
   };

   sum.toString = function () {
    return number;
   };
   return sum
}
console.log(add(4)(3).toString());