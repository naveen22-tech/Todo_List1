//ES6 = ECMAScript 2015, major update to JavaScript, introduced new features and syntax improvements

// let and const
//let name_ = 'jhon';
//const age = 30;
//console.log(name_, age);
//
//var x = 10;
//var x = 20;
//console.log(x); // 20
//
//const y = 20;
//
////y = 30; // TypeError: Assignment to constant variable.
////console.log(y);
//
//function Add(a,b){
//    return a + b;
//}
//console.log(Add(5, 10)); // 15
//
//// Arrow function
//const AddArrow = (a, b) => a + b;
//console.log(AddArrow(5, 10)); // 15
//
//const name  = "Naveen";
//const greeting = `Hello, ${name}! Welcome to ES6.`;
//console.log(greeting); // Hello, Naveen! Welcome to ES6.
//console.log("Hello"+name);

//Object destructuring
//const user = {name: "Naveen", age: 23};
//const {name, age} = user;
//console.log(name); // Naveen

//Array destructuring
const numbers = [1, 2, 3];
const [first, second, third, fourth] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // undefined

//spread operator
const arr1 = [1,2,3];
const arr2 = [...arr1,4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]

//Merge objects

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const mergedObj = {...obj1, ...obj2};
console.log(mergedObj); // {a: 1, b: 2, c: 3, d: 4}

//Merge arrays
const arr3 = [1,2,3]
const arr4 = [4,5,6];
const mergedArr = [...arr3, ...arr4];
console.log(mergedArr); // [1, 2, 3, 4, 5, 6]

//copy Object 
const user = {name: 'Naveee'}
const copiedUser = {...user, age : 23};
console.log(copiedUser); // {name: 'Naveee'}

//rest operator
function sum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr);
}
sum(1, 2, 3, 4); // 10
console.log(sum(1, 2, 3, 4)); // 10

//default parameters
function greet(name = 'Guest'){
    console.log(`Hello, ${name}!`);
}
greet();
greet('Naveen'); // Hello, Naveen!

l