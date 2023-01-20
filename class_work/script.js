let books = {
    title: ['Rich Dad Poor Dad', 'Atomic Habits', 'Deep Work', 'The Alchemist'],
    author: ['Robert Kiyosaki', 'James Clear', 'Cal Newport', 'Paulo Coelho'],
    isFree: true,
 }
// change to false
books.isFree = false;
console.log("Change isFree: " + books.isFree)

// 2
books.title.push("Ikigai")
console.log(books.title)

// 3
books.author.push("Francesc Miralles")
console.log(books.author)

//4 
// New key using (.) dot
books.language = "english";
console.log(books)

// ANother way to add new object by using array
// books["language"] = "English";

//5
delete books.isFree;
console.log("Delete isFree from object: " + books)

// 6

for(let i = 0; i<books.title.length; i++){
    console.log(books.title[i])
}

// 7
for(let i = 0; i<books.title.length; i++){
    console.log(books.title[i] + " was written by " + books.author[i])
    
}

books.title.forEach((element,key) => {
    console.log((element) + " was written by " + books.author[key])
});

// 8. WAP to calculate the area of a circle. 
// Take radius as an input from user. (Use functions)

var rad = prompt("Enter the radius: ");
const pivalue = 3.1416;
let area;

function areaOfCircle(x,y){

    return area = y * x * x;
    
}

console.log(areaOfCircle(rad,pivalue))