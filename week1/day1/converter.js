const exchangeRate = 1500

function nairaToUsd(amount){
    return amount/ exchangeRate
}

function UsdToNaira(amount){
    return amount * exchangeRate
}

function CelsiusToFahrenheit(celsius){
    return (celsius * 9/5) + 32
}

function KgToPounds(kg){
    return +(kg * 2.20462).toFixed(2)
}

console.log(`The value of 50000 naira in USD is ${nairaToUsd(50000)} dollars`)
console.log(`The value of 50000 USD in naira is ${UsdToNaira(50000)} naira`)
console.log(CelsiusToFahrenheit(0))
console.log(CelsiusToFahrenheit(100))
console.log(KgToPounds(100))