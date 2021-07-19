var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ');

var score=0;
console.log("Welcome "+ userName)

console.log("\n ------------------------------------\n")

console.log('Let\'s check if you can manage your finances independently? You can answer: Yes/No')

// play function 
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
  }else{
    score--;
  }

  console.log("Current score: "+ score);
}

var questions = [{
  question : "You know what\'s index funds? ",
  answer: "Yes"
},{
  question : "You know what\'s ETFs? ",
  answer: "Yes"
},{
  question : "You know why low fees matter? ",
  answer: "Yes"
},{
  question : "You invest in index funds and ETFs? ",
  answer: "Yes"
},{
  question : "You know about diversification? ",
  answer: "Yes"
},{
  question : "You save taxes with NPS? ",
  answer: "Yes"
},{
  question : "You are putting away atleast 20% of your paycheck into savings? ",
  answer: "Yes"
},{
  question : "If market plummets you don't sell everything and you know you are in it for the long term? ",
  answer: "Yes"
},{
  question : "You have setup the set it forget it model? ",
  answer: "Yes"
},{
  question : "You have health insurance and life insurance? ",
  answer: "Yes"
}];

for(var i=0;i<questions.length;i++){
 console.log("\n") 
 play(questions[i].question,questions[i].answer);
}

console.log("Your score is : "+ score)
console.log("\n---------The Final verdict------------\n")
if(score>=6){
  console.log("Congrats! You know how to manage your fincances independently.You don't likely need to pay for financial advice.")
}else{
  console.log("Don't worry.You can read up on a few books like Unconventional Success by David F. Swensen and Common Sense on Mutual Funds by John C. Bogle to get going.")
}