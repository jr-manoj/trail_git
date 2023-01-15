// Array - []

const x = [2,3,4,
            5,6,7];
console.log(x)

//  push() - To add new data to array
x.push(8,9)
console.log(x)

x.pop() // pop() - By default delete last element 
console.log(x)

// shift() - To delete the first index data from the array
x.shift()
console.log(x)

// splice(start:end) - removes elements form array
console.log("Original Array: " + x)
const removeArray = x.splice(1)
console.log("Array: " + removeArray)
console.log("Original Array: " + x)

// length
x.push(9,10,11,12,13,14) // Added in x
console.log(x)
console.log("Length of Array: " + x.length)

for(let i= 0; i<= x.length; i++){
    if(x[i] == 12){
        break
    }else{
    console.log(x[i])
    }
}


// Task: WAP of array where  if  num its odd print its odd and if even print its even
let num = new Array(1,2,3,4,5,6,7,8,9,10)

for(let i = 1; i<num.length; i++){
    if(num[i]%2 == 0){
        console.log(num[i] + "is a even number.")
    }
    else{
        console.log(num[i] + "is a odd number.")
    }
}

// Object - {} (multiple values)

const person ={
    name: "Kumar Paudel",
    address: {
        country: "Nepal",
        state: "Gandaki"

    },
    age: 18
};

console.log(person.name) // To access particular data in object

console.log(person.address.state)

// To have multiple data in object we need to use array []

const person_1 =[{
    name: "Kumar Paudel",
    address: {
        country: "Nepal",
        state: "Gandaki"

    },
    age: 18
},{
    name: "Subash Paudel",
    address: {
        country: "USA",
        state: "Bagmati"

    },
    age: 18
}];

console.log(person_1[1].address.state) // To access multiple data object we need to access as we did in array (with its index value)

// forEach loop in Object

// per => -> also like function(per) [ES6]
person_1.forEach((per, key) => {
    if(key == 1){
        console.log(per.address.country)
    }
});

// key,value -> help to access the each index data when we use foreach loop in object 

// == -> only check wheather the value is equal to or not 
// === -> it check value as well as its datatype 

const value = 1;

if(value === 1){ // Use this, as compare to ==. So, less chances of error
    console.log(value)
}



