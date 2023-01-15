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

for(i= 0; i<= x.length; i++){
    console.log(i)
}



