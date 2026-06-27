// const obj = {
//   name: "Alex",
//   skills: ["JS", "Python"]
// };

// const copy = { ...obj };

// copy.skills.push("C++");
// copy.roll = 21;

// console.log(obj.skills);
// console.log(obj);
// console.log(copy);

//creating a promise
// const myPromise = new Promise((resolve, reject)=>{
//     let success = true;
//     if(success){
//         resolve("Operation Successful");
//     }else{
//         reject("Operation failed");
//     }
// })

//comsuming a promise
// myPromise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error)
// })

//.then --> Handle success
//.catch() -->handles errors


// Promise with Asynchronous Example:
// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Data fetched successfully")
//         },2000)
//     })
// }

// fetchData()
// .then((data)=>{
//     console.log(data)
// })


//modern js , async and await

// console.log("Start")

// function getDataAsync(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("hello");
//         },3000)
//     })
// }

// async function showData() {
//     let result = await getDataAsync();
//     console.log(result) //run after three seconds
    
// }

// showData();
// console.log("end")

//error handling with try...catch

console.log("start")

function getInfoAsync(){
    return new Promise((resolve,reject)=>{
        throw new Error("Internal Server Error!!!")
    });
};

async function showInfo() {
    try{
        let result = await getInfoAsync()
        console.log(result)
    }catch(error){
    console.log(error)
    }

}

showInfo();
console.log("end");
