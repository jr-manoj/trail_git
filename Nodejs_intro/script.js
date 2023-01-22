function requestSomeData(reqNo){
    console.log("Request: ", reqNo);
    queryAndResponse(() => console.log("Response For: ", reqNo));

}

function queryAndResponse(callback){
    setTimeout(callback, 5000);
}

// function setTimeoutExample(){
//     console.log("I am calling you...");
//     setTimeout(() => console.log("I was called..."), 3000);
// }

// setTimeoutExample();

requestSomeData(1);
requestSomeData(2);
requestSomeData(3);
requestSomeData(4);