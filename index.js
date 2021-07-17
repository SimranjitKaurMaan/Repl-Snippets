var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ');

var score=0;
console.log("Welcome "+ userName)

// play function 

function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("you are right!");
    score++;
  }else{
    console.log("you are wrong!");
  }

  console.log("Current score: "+ score);
}

var questions = [{
  question : "Where do i live? ",
  answer: "Bangalore"
},{
  question : "Where do i work? ",
  answer: "Udaan"
}];

for(var i=0;i<questions.length;i++)
{
play(questions[i].question,questions[i].answer);
}

console.log("The score: "+ score)
