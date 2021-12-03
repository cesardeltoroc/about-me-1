'use strict';
//console.log ('hello world');//
let counter = 0;

function userName() {
  let userName = prompt('What is your name?')
  alert('Welcome to Jallow\'s About Me website ' + userName);
}
userName();


//Question 1
function questionOne(){
  let userAgeOne = prompt('Am I 29 years old?').toLowerCase();

if (userAgeOne === 'yes' || userAgeOne === 'y') {
  //console.log('YES, I am 29 years old');
  alert('Yes I am 29 years old. ');
  counter++;

}
}
questionOne();


// //Question 2
function questionTwo() {
  let userLocation = prompt('Do I live in Seattle?').toLowerCase();

  if (userLocation === 'yes' || userLocation === 'y') {
    //console.log('Yes I do live live in Seattle');
    alert('Yes I do live in Seattle. ');
    counter++;
  
  }
}
questionTwo();


// //Question 3
function questionThree(){
  let userVideoGame = prompt('Do I play video games?').toLowerCase();

if (userVideoGame === 'yes' || userVideoGame === 'y') {
  //console.log('Yes I do play video games.');
  alert('Yes I do play video games. ');
  counter++;
}
}
questionThree();



//Question 4
function questionFour() {
  let userSoccer = prompt('Do I like to play soccer?').toLowerCase();

  if (userSoccer === 'yes' || userSoccer === 'y') {
    //console.log('Yes I do like to play soccer.');
    alert('Yes I do like to play soccer.');
    counter++;
  }
}
questionFour();




// //Question 5
function questionFive(){
  let userCake = prompt('Do I like cake?').toLowerCase();

  if (userCake === 'yes' || userCake === 'y') {
    //console.log('Yes I do like cake.');
    alert('Yes I do like cake. ');
    counter++;
  }
}
questionFive();




// //Question 6
// let userAnswer = parseInt(prompt('Please guess a Number 1-100'));
// let correctAnswer = 90
// let attemps = 4

// for (let i = 0; i < attemps; i++) {
//   while (userAnswer < 1 || userAnswer > 100) {
//     userAnswer = parseInt(prompt('Please Try Again! A number 1-100'));
//   }
//   if (userAnswer === correctAnswer) {
//     alert('DING DING DING.You got it right');
//     alert('Game Winner!!');
//     counter++;
//     break;
//   } else if (userAnswer > correctAnswer) {
//     userAnswer = parseInt(prompt('Sorry. Too high.Please try again a Number 1-100 '))
//   } else if (userAnswer < correctAnswer) {
//     userAnswer = parseInt(prompt('Sorry.Too low.Please try again a Number 1-100'))
//   }

//   if (i == 3) {
//     alert(`the correct answer was  ${correctAnswer} Game Over!`);

//   }

// }


// //Question 7
// let userQ7Guess =parseInt(prompt('What are the Factors of 12?'));
// let correctAnswersArray = [1, 2, 3, 4, 6, 12];


// for (let count=5; count > 0; count--){
//   for (let i = 0;i < correctAnswersArray.length; i++){
//     let correctNum = correctAnswersArray[i];
//     if (userQ7Guess === correctNum){
//       alert ('You got it Correct!');
//       count = 1;
//       break;
//     }
//     else if (userQ7Guess !== correctNum){
//       userQ7Guess = prompt('Thats not right try again!');
//     }
//   if (i == 4){
//     alert(`You are out of tries the correct answer was ${correctAnswersArray} `);
//     count = 1
//     break;
//     }

//   }
  
  
// }



// alert(`Thank!! you for visiting my website and participate in the games ${userName} ..You got ${counter}/6 .`);
