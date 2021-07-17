var readlineSync = require('readline-sync');
var score = 0;

function answerQuestion(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log('You are right!')
    score+=1;
  }else{
    console.log('You are wrong!')
    score-=1;
  }
}


answerQuestion('What\'s your name? ', 'Simran');
console.log("Your score is ", score)


