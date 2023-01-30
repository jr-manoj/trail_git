// Syntax to create promise (which is asynchnorous in nature)

// const promise = new Promise((resolve, reject) => {  // two parameters, resolve and reject.
//     // As login example.

//     const sum = 1+ 1;
//     if (sum ===2){
//         resolve();
//     }
//     else{
//         reject();
//     }

// });


// promise.then(() => ){  --> If resolve then run this

// }
// promise.catch()   -> If reject run this

// promise.then(() => {  // We can add then function as more we want.
//     console.log("This is resolve.")

// }).then(() => {
//     console.log("THe final value must be updated to 10.")
// });


// promise.catch(() => {
//     console.log("This is reject.")
// });

const promise_1 = new Promise((resolve, reject)=>{

    console.log("Go and bring some tacos")
    const tacos = true;

    if (tacos)
        resolve("Tacos was found...")
    else
        reject("Alas, no tacos tonight.")


});

const tacosFound = ((result)=>{
    console.log(result);
    console.log("Cook up some pasta.")
});

const tacosNotFound = ((result)=>{
    console.log(result);
    console.log("Cook up some pasta.")
});

promise_1.then(tacosFound).catch(tacosNotFound);






// promise_1.catch((result)=>{
    
//     console.log(result);

//     console.log("Cook up some pasta.")
// });

// promise_1.then((result)=>{
//     console.log(reject)
// });



// promise_1.catch((result)=>{
    
//     console.log(result);

//     console.log("Cook up some pasta.")
// });