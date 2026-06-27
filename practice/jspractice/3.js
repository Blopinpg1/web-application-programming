// Write a function using rest parameters that accepts any number of arguments and returns their product.

// function multiplyAll(...numbers){
//     let product = 1;

//     for(let num of numbers){
//         product *= num;
//     }
// return product;
// }

// const multiplyAll = (...numbers) => 
//     numbers.reduce((acc, num) => acc * num, 1);

// console.log(multiplyAll(2, 3, 4));   // 24
// console.log(multiplyAll(5, 10));     // 50
// console.log(multiplyAll(1, 2, 3, 4, 5)); // 120


// Copy an object using the spread operator and modify one property.


// const obj = {

//     name: 'Bibek',
//     age: 22,
//     city: "Kathmandu"

// };

// const updated = {
//     ...obj,
//     age: 23
// }

// console.log(obj);
// console.log(updated);

// Convert an array of strings to uppercase using map().

// const array = ["hello","bibek"]

// const newarr = array.map((s)=>s.toUpperCase())
// console.log(newarr)


// Remove duplicate elements from an array.


// function duplicate_remove(arr) {
//     const newarr = new Set(arr);
//     return [...newarr];   // convert Set → array
// }

// const arr = [2, 3, 2, 4, 6, 7, 8, 9, 7, 8];

// console.log(duplicate_remove(arr));


// Sort an array of objects based on age or marks.

const students = [
    { name: "Bibek", age: 22, marks: 80 },
    { name: "Ram", age: 20, marks: 90 },
    { name: "Sita", age: 21, marks: 85 }
];


















