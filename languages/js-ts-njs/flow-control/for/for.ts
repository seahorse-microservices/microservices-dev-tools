//For
for (let i: number = 0; i < 10; i++){
    console.log ("Execution no." + i);
}

//for of
let arr: number[] = [100, 200, 300, 400, 500];
for (let num of arr) {
    console.log("Number:", num);
}

//For In
let person = {
    name: 'Felipe',
    age: '33',
    city: 'Valencia'
};
for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

//break
for (let i: number = 0; i < 10; i++){
    if(i === 5){
        console.log("Execution no. 5 has been found");
        break;
    }
    console.log("Execution no." + i);
}
//continue
for(let i: number = 0; i < 10; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log("odd number: " + i);
}
