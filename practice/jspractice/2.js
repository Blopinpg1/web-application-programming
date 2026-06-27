// function product(...numbers) {
//     return numbers.reduce((acc, current) => acc * current, 1);
// }

// console.log(product(2, 3, 4));      // 24
// console.log(product(5, 10));        // 50
// console.log(product(7));            // 7
// console.log(product());             // 1

// Copy an object using the spread operator and modify one property.

// const user = {
//     name: "Bibek",
//     address: { city: "Kathmandu" }
// };

// const copiedUser = { ...user };

// copiedUser.address.city = "Pokhara";

// console.log(user.address.city); // "Pokhara" (changed!)

// Convert an array of strings to uppercase using map().

// const strings = ["kera", "Hello", "mero"];

// const new_strings = strings.map(a => a.toUpperCase());

// console.log(new_strings);

// Remove duplicate elements from an array.

// arr = [3, 4, 6, 5, 5, 4, 4];

// function remove_dublicates(arr) {
//   arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     let exists = false;


//     for (let j = 0; j < arr2.length; j++) {
//       if (arr2[j] === arr[i]) {
//         exists = true;
//         break;
//       }
//     }
//     if(!exists){
//         arr2.push(arr[i])
//     }
//   }
//   return arr2;
// }

// console.log(remove_dublicates(arr))



// const unique = [...new Set(arr)];

// console.log(unique);


// Sort an array of objects based on age or marks.



// const students = [
//   { name: "Aarav", age: 21, marks: 78 },
//   { name: "Bibek", age: 19, marks: 85 },
//   { name: "Sita", age: 23, marks: 72 }
// ];

// students.sort((a, b) => a.age - b.age);  //asending order
// console.log(students)


// Loop through object properties using for...in.
const person = {
    name: "Bibek",
    age: 22,
    city: "Kathmandu"
};

for (let key in person) {
    console.log(key, ":", person[key]);
}