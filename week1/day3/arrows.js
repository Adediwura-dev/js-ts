function add(a, b){
    return a + b
}

const add2 = (a, b) => {
    return a + b
}

const add3 = (a,b ) => a + b

const greet = (name = "friend") => {
    return `Hello, ${name}`
}

console.log(add(1, 2))
console.log(add2(1, 2))
console.log(add3(1, 2))
console.log(greet("Bushra"))
