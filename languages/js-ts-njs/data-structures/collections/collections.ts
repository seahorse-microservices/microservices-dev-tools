//Objects
let user = {
    name: 'Felipe',
    age: '33',
    city: 'Valencia'
};
console.log(user.name) 

//enums
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
 
console.log(PrintMedia.Newspaper) //returns NEWSPAPER
console.log(PrintMedia['Magazine'])//returns MAGAZINE


//tuple
var person: [number, string, boolean] = [1, "Steve", true];
console.log(person)

//array
let clasicArray: string[] = ['Apple', 'Orange', 'Banana'];
console.log(clasicArray)
let genericArray: Array<string> = ['Apple', 'Orange', 'Banana'];
console.log(genericArray)
let javaScriptArray = [1, 3, 'Apple', 'Orange', 'Banana', true, false];
console.log(javaScriptArray)
