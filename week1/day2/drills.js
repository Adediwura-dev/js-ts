const age = 15
const Status = age <= 18 ? "minor": "adult"
console.log(Status)

const values = [0,1,-1, "", "hello", "0", null, undefined, NaN, [], {}]

for (const v of values) {
    if (v) {
        console.log(v, "is truthy")
    } else {
        console.log(v, "is falsy")
    }
}

//true and FALSE
console.log("world" && "hello")
console.log("" || "fallback")
console.log(0 ?? "default");
//returns 0 since 0 is neither null or undefined
console.log(0 || "default");
