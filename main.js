// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let numString = (num) => {
  return num.toString()
  document.getElementById("display-stringNum");
}

console.log(numString(12))


// Write a JavaScript program to convert a string to the number.
let stringNum = (x) => {
  return parseInt(x)
  document.getElementById("display-stringNum");
}
console.log((stringNum("10")))


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  brazilWc = 6

  function whatType() {
  
    return typeof brazilWc
  }
  
// Write a JavaScript program that adds 2 numbers together.
function addNum (x,y) {

  return x+y;

}

console.log(addNum(2,5))


// Write a JavaScript program that runs only when 2 things are true.
function twoTrue (x, y) {
  if ((x = y) && (x=5))
  
  return true;
  }
  
  
  console.log(twoTrue(5,5))


// Write a JavaScript program that runs when 1 of 2 things are true.
function oneTrue (x, y) {
  if ((x === y) || (x > 5 )) {
    return "True"
  }
  else {
   return "False"
 
}
}

console.log(oneTrue(3, 4))


// Write a JavaScript program that runs when both things are not true.  
if (!(x === y) || (x > 5 )) {
  return "True"
}
else {
 return "False"

}


console.log(oneTrue(3, 4))

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
