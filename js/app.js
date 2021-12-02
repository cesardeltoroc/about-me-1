'use strict';
//console.log ('hello world');//
let userName = prompt ('What is your name?')
    alert('Welcome to Jallow\'s About Me website ' + userName);


//Question one//
let userAgeOne = prompt('Am I 29 years old?').toLowerCase();

if (userAgeOne === 'yes' || userAgeOne === 'y'){
  //console.log('YES, I am 29 years old');
  alert('Yes I am 29 years old. ');
  
}


let userLocation = prompt('Do I live in Seattle?').toLowerCase();

if (userLocation === 'yes' || userLocation === 'y'){
  //console.log('Yes I do live live in Seattle');
  alert('Yes I do live in Seattle. ');

} 


let userVideoGame = prompt('Do I play video games?').toLowerCase();

if (userVideoGame === 'yes' || userVideoGame === 'y'){
  //console.log('Yes I do play video games.');
  alert('Yes I do play video games. ');
}

let userSoccer = prompt('Do I like to play soccer?').toLowerCase();

if (userSoccer === 'yes' || userSoccer === 'y'){
  //console.log('Yes I do like to play soccer.');
  alert('Yes I do like to play soccer.');
}


let userCake = prompt('Do I like cake?').toLowerCase();

if (userCake === 'yes' || userCake === 'y'){
  //console.log('Yes I do like cake.');
  alert('Yes I do like cake. ');
}




  let userAnswer = parseInt(prompt('Please guess a Number 1-100'));
  let correctAnswer = 90
  let attemps = 3
  
  for (let i=0; i < attemps; i++){
      while(userAnswer < 1 || userAnswer > 100){
          userAnswer = prompt ('Please Try Again! A number 1-100')
      }
      if (userAnswer === correctAnswer){
          alert('DING DING DING.You got it right');
          alert('Game Winner!!');
          break;
      }else if (userAnswer > correctAnswer){
          userAnswer = prompt('Sorry. Too high.Please try again a Number 1-100 ')   
      }else if (userAnswer < correctAnswer){
          userAnswer = prompt('Sorry.Too low.Please try again a Number 1-100')
      }

      if (i == 3){
          alert('the correct answer was '  + correctAnswer);
          alert('Game Loser!!');

      }

  }



































  alert('Thank!! you for visiting my website and participate in the games  '  + userName);
