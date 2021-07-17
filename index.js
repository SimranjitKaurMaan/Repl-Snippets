var readlineSync = require('readline-sync');
var userAge = readlineSync.question('am i older than 25? ')


if(userAge === "yes")
 console.log('You are right!');
else console.log('You are wrong!');


