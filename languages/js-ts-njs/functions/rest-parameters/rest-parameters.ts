function greeting(greetings: string, ...names: string[]) {
    return greetings + " " + names.join(", ") + "!";
}

console.log(greeting("Hello", "Steve", "Bill"))

console.log(greeting("Hello"))

