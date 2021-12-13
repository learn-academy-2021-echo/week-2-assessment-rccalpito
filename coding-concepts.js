// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
console.log(cohort.split(""))

// a) Your answer: 'E', 'c','h', 'o', ' ', '2', '0', '2', '1'
// b) Verify and explain: ['E', 'c','h', 'o', ' ', '2', '0', '2', '1'] almost got it..
//the .split() method works on datatype strings. It splits the string into an array. The "" splits each letter of each word into a separate index of the array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: 'hello, undefined'
// b) Verify and explain: 'undefined' the function does not have a return statement and does not return anything.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: the function uses arrow notation and does not require a return statement. The returned value is value * 2


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: the function returns value, for every value that is odd (value % 2 !==0)


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain: the function call on myCodingSkills goes into the object, and asks for the value stored in the key "languages" and returns index 0 of the array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Delta", year: 2021}
// b) Verify and explain: Learn {student: "George", cohort: "Delta", year: 2021} the class call includes the name of the class.. which i didn't realize. The new instance (object) of class called learnStudent passes the argument "George" to the parameter name in the constructor parameter "name"
