for (let Numbers = 1; Numbers <= 100; Numbers++) {
  if (Numbers % 3 == 0 && Numbers % 5 == 0) {
    console.log("FizzBuzz");
  } else if (Numbers % 3 == 0) {
    console.log("Fizz");
  } else if (Numbers % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(Numbers);
  }
}

//Cleaner method
for (let N = 1; N <= 100; N++){
    output = ""

    if (N % 3 === 0) output+= "Fizz"
    if (N % 5 === 0) output+= "Buzz"

    console.log(output || N)
}
