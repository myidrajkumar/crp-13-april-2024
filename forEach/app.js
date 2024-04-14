let food = ["milk", "honey", "sugar"];
let foodData = [];

food.forEach((item, index) => {
  foodData.push(`${item} has been pushed at number ${index}`);
}, food);

console.log(foodData);
