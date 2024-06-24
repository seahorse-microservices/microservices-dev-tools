function greeting(greetings, ...names) {
    return greetings + " " + names.join(", ") + "!";
}

console.log(greeting("Hello", "Steve", "Bill"))

console.log(greeting("Hello"))