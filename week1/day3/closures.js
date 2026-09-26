const makeCounter = () => {
  let count = 0;

  return () => {
    count++;
    return count;
  };
};

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

const counter2 = makeCounter()
console.log(counter2())
console.log(counter())

//scope looks outward and upward, never inward and downward
//returned function still has access to count
//the function remembers its surrounding scope
