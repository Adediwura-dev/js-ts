// var num = 2
// var newNum = ++num

// console.log(newNum)

// firstName = "Bushra"
// lastName = "Gbadegesin"

// fullName = firstName + " " + lastName

// console.log(fullName)

const userInput = prompt("Are you 18 and above? (yes/no)");

const question = userInput ? userInput.trim().toLowerCase() : "";

const response =
  question == "yes"
    ? "You are allowed to proceed"
    : "Sorry, you are not allowed to proceed";

alert(response);

const answer = "Lagos";

var x = prompt("Where does the boss live?");

var cleanInput = x ? x.trim().toLowerCase() : "";

if (cleanInput === answer.toLowerCase) {
  alert("Correct!");
} else {
  alert("Not quite! Try again");
}
