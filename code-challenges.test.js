// ASSESSMENT 2: Coding Practical Questions with Jest

const { split } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

//create a function that takes in parameter num, and returns num if num % 3 === 0


const div = (num) => {
    if (num % 3 === 0){
        return num
    } else {
        return 
    }
}

// a) Create a test with expect statements for each of the variables provided.
//describe and put the function name

describe("divByThree", () => {

    // describes that the function does.
    it("checks to see if a number is divisible by 3", () => {
  
      //an expect method, nested within the test block, calling on the divByThree() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      //call function (divByThree) in method expect, passing arguments num1, num2, num3 in each test case. 
      //verify that the output is as expected
      expect(divByThree(num1)).toEqual("15 is divisible by three")
      expect(divByThree(num2)).toEqual("0 is divisible by three")
      expect(divByThree(num3)).toEqual("-7 is not divisible by three")

    })
})
var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

//in my initial implementation, i handwrote all the describe, and expect functions. 
//Lots of typos... lots of typos...


// b) Create the function that makes the test pass.

// create function divByThree that takes in parameter num
// if % 3 === 0, it means its divisible by three, else no
// using string interpolation returnt the number `is/is not divisible by` number

const divByThree = (num) => {
    if (num % 3 === 0){
        return `${num} is divisible by three`
    } else {
        return `${num} is not divisible by three`
    }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//create function named firstCap
//function takes in parameter array
//function cycles over entire array using .map()
//for each first letter use .toUpper() to uppercase the first letter of each string
//.toUpperCase() only works on entire string
//need to split each element of the array 
// need to .toUpperCase() index 0 of each split array element thing
// need to rejoin entire split array thing
// need to pass uppercased and rejoined split array thing back into original array or new array i dunno

// const firstCap = (array) => {
//     let splitArr = array.map(arrayElement => {
//        let splitElement = arrayElement.split("")
//        return splitElement[0].toUpper()
//     })
//     return splitArr.join("")
// }

//not working so lets try something new
//create a function that splits an array of strings into single arrays
//line 99 correctly uppercases first word
// figure out how to get it to take in an array and you are good

// const splitArrIntoMoreArrays = (array) => {
//     let newWord = array.split()
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i].split();
//         return element.charAt(0).toUpperCase() + element.slice(1)


//     }
//     return array
// }

//code below can uppercase the first letter in a string array
//takes 
//const newWord = randomNouns1[0].charAt(0).toUpperCase() + randomNouns1[0].slice(1) 

//i just learned that i could not print out the console log randomNoun2 or randomNoun1 because the function call was before the variable declaration

// console.log(randomNouns2);

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]


describe("firstUpper", () => {

    // describes that the function does.
    it("uppercase the first letter of each word in the array", () => {
  
      //an expect method, nested within the test block, calling on the divByThree() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      //call function (firstUpper) with arguments randomNouns1 and randomNouns2 
      //verify that the output is as expected
      expect(firstUpper(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(firstUpper(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
      
    })
})

// b) Create the function that makes the test pass.
// create function called firstUpper, with parameter array (randomNouns1, 2)
// using map function, cycle over each word and feed it into value
// for each value, set the first character (.charAt(0)) to an uppercase value (.toUpperCase()) and return value
//join by string concatination, the upper cased value + the rest of the word (value.slice(1))
// then return that to the new variable created (newWord)

const firstUpper = (array) => {
    let newWord = array.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
    return newWord
}

//use this to test if its working
// console.log(firstUpper(randomNouns1))
// console.log(firstUpper(randomNouns2))
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// const firstVowel = (array) => {
    
//     let firstUpper = array.map(value, index => {
//         return index
//     }

// }




// console.log(firstVowel(vowelTester1))
// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

describe("firstVowel", () => {

    // describes that the function does.
    it("finds the first vowel in the word and returns its index", () => {
  

      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)

    })
})



// b) Create the function that makes the test pass.

// read in array
// set new variable as array with all the variables
// found online code that used regular expressions to search for values contained wtihin a string
// I DO NOT REALLY UNDERSTAND REGULAR EXPRESSIONS, BUT I FOUND THIS CODE WORKED MY ORIGINAL WORK CAN BE FOUND BELOW.
// this was the best i could do with an all day hangover. i apologize. 

const firstVowel = (array) => {
    var vowels = /[aeiou]/i;
    let firstUpper = array.search(vowels)
    return firstUpper
}

// console.log(firstVowel(vowelTester3))

// initial implementation was to search for all values, and compare if it is a,e,i,o,u. If it was any of them, return x. 
// incriment x for each time it is not a vowel
// initial implementation did not work because my code incremented x for every instance of a vowel, and would not bail out at the first vowel found
// i would use a for loop, and break statement, but for some reason, my code did not like it when i did that.

// firstUpper.map((value, index) => {
//     if (value === "u" || value === "a" || value === "i" || value === "o" || value === "e") {
//         return x

//     } else {
//         x++
//     }
// })
// return x

// let firstUpper = array.indexOf("")