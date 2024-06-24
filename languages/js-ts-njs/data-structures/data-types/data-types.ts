//number
let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57

//string
let employeeName:string = "John Smith"; 
let employeeDept:string = "Finance"; 

console.log(employeeName + employeeDept)

// Pre-ES6 
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 

// Post-ES6 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 

console.log(employeeDesc1);//John Smith works in the Finance department. 
console.log(employeeDesc2);//John Smith works in the Finance department.

//boolean
let isPresent:boolean = true;
console.log(isPresent); 

//any
let something: any = "Hello World!"; 
something = 23;
console.log(something);
something = true;
console.log(something);

//void
//let nothing: void = undefined; // Compiler Error
//console.log(nothing);
//let nothing: void = null; // Compiler Error
//console.log(nothing);
//let num: void = 1;  // Compiler Error
//console.log(num);


//never
//let somethingVoid: void = null;
//console.log(somethingVoid);
//let nothingNever: never = null; // Error: Type 'null' is not assignable to type 'never'
//console.log(nothingNever);



//union
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
//code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
//empId = true; // Compiler Error



