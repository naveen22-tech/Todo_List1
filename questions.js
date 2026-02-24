//qusetion 1
let x = 10;
x = 20;
console.log(x); //Answer: 20

//question 2
//const a = 5;
//a = 10;
//console.log(a); //Answer: TypeError: Assignment to constant variable.

//question 3
function Add(a,b){
    return a + b;
}
console.log(Add(5, 10)); //Answer: 15

//question 4
const AddArrow = (a, b) => a + b;
console.log(AddArrow(5, 10)); //Answer: 15

//question 5
const student = {
    name: "Naveen",
    age: 23,
    grade: "A"
}
const {name, age} = student;
console.log(name);
console.log(age); //Answer: Naveen, 23

//question 6 return an array of squres using map;
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares); //Answer: [1, 4, 9, 16, 25]

//question 7 filter even numbers from an array
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); //Answer: [2, 4]

//question 8 reduce to sum all numbers in an array
const sum = numbers.reduce((a, b) => a+b);
console.log(sum); //Answer: 15

//convert all strings in an array to uppercase
const strings = ["hello", "world", "javaScript"];
const upperCaseStrings = strings.map(str => str.toUpperCase());
console.log(upperCaseStrings);


//convert all strings in an array to lowercase
const lowerCaseStrings = upperCaseStrings.map(str => str.toLowerCase());
console.log(lowerCaseStrings); //Answer: ["HELLO", "WORLD", "JAVASCRIPT"] 

//return only age > 20 from object 
const people = [
    {name: "Naveen", age: 23},
    {name: "John", age: 19},
    {name: "Alice", age: 30}
];
const filteredPeople = people.filter(person => person.age > 20);
console.log(filteredPeople); //Answer: [{name: "Naveen", age: 23}, {name: "Alice", age: 30}]

//question 11 Merge two arrays and remove duplicates
const arr1 = [1,2,3];
const arr2 = [3,4,5];
const mergedArr = [...arr1, ...arr2];
console.log(mergedArr);//Answer: [1, 2, 3, 3, 4, 5]

const uniqueArr = [...new Set(mergedArr)];
console.log(uniqueArr); //Answer: [1, 2, 3, 4, 5]

//queqtion 12 Merge two objects and remove duplicates
const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const mergedObj = {...obj1, ...obj2};
console.log(mergedObj); //Answer: {a: 1, b: 3, c: 4}    

//question 13 Copy an object using spread operator
const user = {name: 'Naveen', age: 23};
const copiedUser = {...user};
console.log(copiedUser);//Answer: {name: 'Naveen', age: 23}

//question 14 Use rest operator to sum all numbers in an array
function sum_(...numbers){
    return numbers.reduce((acc, curr) => acc + curr);
}   
console.log(sum_(1, 2, 3, 4, 5)); //Answer: 15

//Destructure array and skip 2nd element
const arr = [1, 2, 3, 4, 5];
const [first, , third] = arr;
console.log(first, third); //Answer: 1, 3

///add a new property to an object using spread operator
const person = {name: "Naveen", age: 23};
const updatedPerson = {...person, city: "New York"};
console.log(updatedPerson); //Answer: {name: "Naveen", age: 23, city: "New York"}

//challenge questions 

let n = 10;
{
    let n = 20;
    console.log(n); //Answer: 20
}
console.log(n); //Answer: 10

const men = {name: "Naveen"};
men.name = "ravi";
console.log(men.name); //Answer: ravi

//reverse a string using map + split 
const str = "hello";
const reversedStr = str.split("").reverse().join("");
console.log(reversedStr); //Answer: "olleh"

//count occurrence of each character in a string using reduce with explaination in simple step by step 
const charCount = str.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;   
    return acc;
}, {});
console.log(charCount); //Answer: {h: 1, e: 1, l: 2, o: 1} 

const fruits = ["apple", "banana", "orange", "apple", "banana"];
const uniqueFruits = fruits.reduce((acc, fruit) => {
    if(!acc.includes(fruit)){
        acc.push(fruit);
    }
    return acc;
}, []);
console.log(uniqueFruits); //Answer: ["apple", "banana", "orange"]

//flatten a nested array using reduce + spread operator
const nestedArr = [1, [2, 3], [4, 5]];
const flattenedArr = nestedArr.reduce((acc, val) => acc.concat(val), []);
console.log(flattenedArr); //Answer: [1, 2, 3, 4, 5]