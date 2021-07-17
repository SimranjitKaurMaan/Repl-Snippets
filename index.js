var readlineSync = require('readline-sync');
var questionOne = "am i older than 25? ";
var answerOne = "yes";
var answerTwo = "no";
var userAnswer = readlineSync.question(questionOne);

var score = 0;

if(userAnswer === "yes"){
 console.log(answerOne);
 score+=1;
}
else{console.log(answerTwo);
score-=1;
}

console.log(score);


questionTwo = "are you from USA?";
answerOne = "yes";
answerTwo = "no";
userAnswer = readlineSync.question(questionTwo);

if(userAnswer === "yes"){
 console.log(answerOne);
 score+=1;
}
else{console.log(answerTwo);
score-=1;
}

console.log(score);
