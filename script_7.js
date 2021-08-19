const prompt = require('prompt-sync')();

let answer = prompt("quel est ta question ?");


//question = answer.includes("?")

  
let question = false
var lastletter = answer[answer.length - 1]
if(lastletter === "?"){
  question = true
  }

let uppercase = false
if(answer.toUpperCase() === answer){
  uppercase = true
  }
  
word = answer.includes("Fortnite")

let empty = false
if(answer === ""){
  empty = true
  }

if(question === true){
  console.log("Ouais Ouais...")
  }

else if(uppercase === true && empty === false){
  console.log("Pwa, calme-toi...")
  }

else if(word === true){
  console.log("on s' fait une partie soum-soum ?")
  }

else if(empty === true){
  console.log("t'es en PLS ?")
  }

else {
  console.log("balek")
  }