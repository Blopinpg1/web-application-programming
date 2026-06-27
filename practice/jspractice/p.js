// const hello = () =>{
//     console.log("hello")
// }

// const add = (x, y) => {console.log(x*y)}

// add(2,4)

// const square = x => x*x
// console.log(square(4))

//this is arrow function

// const employee = {
//    name : "Bibek",
//    salary : 2000000,

//    greet : function(){
//     console.log(this.name)
//    }
// }

// employee.greet()  //traditional method

// const employee = {
//   name: 'Bibek',
//   salary: 2100000,
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 1000);
//   },
// };

// employee.greet()   //this is right

// Destructing

// let numbers = [10, 20, 30];

// let [a, b, c] = numbers;

// console.log(a, b , c)

// let [h ,  , e]  = [1,2,3]

// console.log(h, e)

//object destructing

// let studentName = {
//     name : "BIbek",
//     age : 23

// };

// let {name : student} = studentName;

// console.log(student)

//default values in array destructing

// const arr = [];
// const [a = 1 , b = 2] = arr
// console.log(a);  //5
// console.log(b); //2

// const arr = [1,2,3];
// console.log(...arr);  //1,2,3

//spread operator with Arrays;

// .Copying Arrays(avoids reference issues)

// const a = [1,2,3]
// const b = [...a];

// b.push(2,3);
// console.log(a);
// console.log(b);

// const a   = [1,2,3];
// const b = a;  //0
// b.push(4);
// console.log(a);
// console.log(b);

// const subject = ["math ", "science", "social"]
// const marks = [10,20,30]

// const result = [...subject, ...marks]

// console.log(result) //spread object merges the objects

// const nums = [1,2,6]

// const result = [1,2,...[3,4],5 ,...nums];
// console.log(result)

//spread obj with object

// const pretty = {
//     hair : "beautiful",
//     age : 21

// }

// const copy = {...pretty}
// console.log(copy)

// const a = {x:1}
// const b = {y:2}
// const merged = {...a,...b}
// console.log(merged)

// const a = {x:1 , y:5}
// const b = {y:2 , x:3}  //the last property with the same key overwrites previous  ones

// const merged = {...a,...b}
// console.log(merged)

//Spread in function calls ,
//Math.max([1,2,3])  it returs null because Math.max([1,2,3]); is defined like this  Math.max(value1,value2,value3)

// const nums = [5,10,15]
// console.log(Math.max(...nums));

// const str = "HELLO"
// const chars ={ ...str};  ///
// console.log(chars)

//rest operator

// function sum(a,b){
//     return a + b;
// }

//rest operator collects values in functional parameters
// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
//   //rest collects , reduce combine
// }
// console.log(sum(1, 2, 3, 4)); //10

// const obj = {
//     name : "Alex",
//     skills :['JS', "Python"]
// }
// const copy = structuredClone(obj) //deep copy , if copy = {...obj} then shallow copy

// copy.skills.push("C++")
// copy.roll = 21;

// console.log(obj.skills)
// console.log(obj)
// console.log(copy)

//deep copy using json.stringify()
// const obj = {
//   name: "Alex",
//   skills: ['JS', "Python"]
// };

// const copy = JSON.parse(JSON.stringify(obj));

// copy.skills.push("C++");

// console.log(obj.skills);  // ['JS', 'Python']
// console.log(copy.skills); // ['JS', 'Python', 'C++']

//Modern js  ES6+ : Asynchonous Programming

//Callbacks
// function greet(name, Callback){
//     console.log("Hello" + name);
//     Callback()
// }

// function sayBye(){
//     console.log("Goodbye!");
// }

// greet("Javascript", sayBye)

//callback hell

// setTimeout(() => {
//   console.log('Step 1');

//   setTimeout(() => {
//     console.log('Step 2');

//     setTimeout(() => {
//       console.log('Step 3');
//     }, 1000);
//   }, 1000);
// }, 1000);

// Problems:

// ● Code moves rightward.
// ● Hard to read.
// ● Hard to debug.
// ● Hard to maintain.
// This is called Callback Hell or Pyramid of Doom.
// Issues with CallBacks:
// ● Readability → Nested structure
// ● Error handling → Very messy
// ● Maintainability → Poor
// ● Scalability → Hard
// → Promises were introduced to solve this.

//Promises
//creating a promise
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve('Operation successful');
//   } else {
//     reject('Operation Failed');
//   }
// });

// resolve() → success
// ● reject() → failure
// ● Promise starts in pending.
// ● Ends in fulfilled or rejected.



//consuming a promise

// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   .then() → handles success.
// ● .catch() → handles errors.


//Promises 

// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Data fetched successfully");
//         },2000)
//     });
// }

// fetchData().then((data)=>{
//     console.log(data);
// })

// Promise Chaining (Replacing Callback Hell)

// fetchData()
//     .then((data)=>{
//     console.log(data);
//     return "Processing data"
//     })
//     .then((msg)=>{
//         console.log(msg);
//         return "Finished";
//     })
//     .then((final)=>{
//         console.log(final);
//     })
//     .catch((err)=>{
//         console.log(err)
//     })


// Simulate asynchronous operations using Promises
// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(userId ===0){
//             reject("User not found!")  
//         }
//       console.log("Fetching user");
//       resolve({ id: userId, name: "Bibek" });
//     }, 1000);
//   });
// }

// function fetchOrders(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Fetched orders for ${user.name}`);
//       resolve(["order1", "order2", "order3"]);
//     }, 1000);
//   });
// }

// function fetchOrderDetails(order) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`Fetched details for ${order}`);
//       resolve({ order, price: 100 });
//     }, 1000);
//   });
// }

// // Promise chaining
// fetchUser(0)
//   .then(user => fetchOrders(user))       // Pass user to next async task
//   .then(orders => fetchOrderDetails(orders[0])) // Get details of first order
//   .then(details => {
//     console.log("Order Details:", details);
//   })
//   .catch(err => console.error("Error:", err));





// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ id: userId, name: "Bibek" });
//     }, 1000);
//   });
// }

// function fetchPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["Post 1", "Post 2", "Post 3"]);
//     }, 1500);
//   });
// }

// function fetchComments(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([`Comment for ${post} A`, `Comment for ${post} B`]);
//     }, 500);
//   });
// }

// // Run all Promises in parallel
// Promise.all([fetchUser(1), fetchPosts(1)])
//   .then(([user, posts]) => {
//     console.log("User:", user);
//     console.log("Posts:", posts);

//     // Fetch comments for the first post
//     return fetchComments(posts[0]);
//   })
//   .then(comments => {
//     console.log("Comments for first post:", comments);
//   })
//   .catch(err => console.error("Error:", err));



// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
//   .then(results => {
//     console.log("Results:", results); // [1, 2, 3]
//   })
//   .catch(err => {
//     console.error("Error:", err);
//   });

//   Explanation:
// ● Runs promises in parallel
// ● Resolves when all succeed
// ● Fails if any fails


//Async and Await

// function fetchUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId === 0) {
//         reject("User not found!"); // simulate an error
//       } else {
//         resolve({ id: userId, name: "Bibek" });
//       }
//     }, 1000);
//   });
// }

// function fetchPosts(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(["Post 1", "Post 2"]);
//     }, 1000);
//   });
// }

// // Using async/await
// async function getUserData(userId) {
//   try {
//     const user = await fetchUser(userId);   // wait for fetchUser
//     console.log("User:", user);

//     const posts = await fetchPosts(user.id); // wait for fetchPosts
//     console.log("Posts:", posts);
//   } catch (error) {
//     console.error("Error:", error); // catch any rejection
//   }
// }

// // Call the async function
// // getUserData(1);  // Works
// getUserData(0);  // Will trigger error handling


//import and export
// export default function hello(){
//     console.log("hello")
// }

// export  function add(a,b){
//   console.log(a+b)
// }

