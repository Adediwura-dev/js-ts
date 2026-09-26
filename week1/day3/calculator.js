const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero"
    }
    return a / b
}

const calculate = (operation, a , b) => {
    return operation(a, b)
}

console.log(calculate(add, 5, 4))
console.log(calculate(subtract, 5, 4))
console.log(calculate(multiply, 5, 0))
console.log(calculate(divide, 0, 4))