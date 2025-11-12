const foods = [];  
console.log('Exercise 1 result:', foods);

foods.unshift('pizza')
console.log('Exercise 2 result:', foods);

foods.unshift('taco')
console.log('Exercise 3 result:', foods);

let favFood = foods[1]
console.log('Exercise 4 result:', favFood);

foods.splice(1,0,'cheeseburger','tofu')
console.log('Exercise 5 result:', foods)

foods.splice(3,1,'sushi','cupcake')
console.log('Exercise 6 result:', foods);

let yummy = foods.slice(3,5)
console.log('Exercise 7 result:', yummy);

let soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx);

let allFoods = foods.join('->')
console.log('Exercise 9 result:', allFoods)

let hasSoup = foods.includes('soup')
console.log('Exercise 10 result:', hasSoup);