(() => {  
  setTimeout(() => {
    let playGame = selectGame();
  
    do {
      playGame();

      const shouldPlayAgain = confirm(
      'Press Ok to play again or \n' +
      'Press CANCEL to go to main menu');

      shouldPlayAgain ? playGame() : playGame = selectGame();

    } while (playGame);
  }, 100);   

})();


function randomNumber(end, start = 0) {
  return Math.floor(Math.random() * (end - start) + 1) + start ;
}

function selectGame() {
  const gameIndex = prompt(
    'Select the game:\n' + 
    '1 - Dice\n' + 
    '2 - Heads or Tails\n' + 
    '3 - Ultimate Randomizer\n' +
    '4 - Super Randomizer\n' + 
    '5 - JS Quiz\n' + 
    '6 - Login\n' + 
    '0 - Exit'
  );
  switch (gameIndex)  {
    case '1':
      return playDice;      
    case '2':
      return playHeadsOrTails;          
    case '3':
      return playUltimateRandomizer;
    case '4':
      return playSuperRandomizer;
    case '5':
      return playJSQuze;
    case '6':
      return doLogin;
    default: 
      return null;            
  }
}

function playDice() {
  alert('Press OK to role the dice')
  const dice1 = randomNumber(6);
  const dice2 = randomNumber(6); 
  
  alert(
    `Dice #1:  ${dice1} \n` +
    `Dice #2:  ${dice2} \n` +
    `Total score:  ${(dice1 + dice2)}`
  );
}

function playHeadsOrTails() {
  alert('Press Ok to flip a coin.')
  switch (randomNumber(2)) {
    case 1:
      alert('HEAD');
      break;
    case 2:
      alert('TAIL');
      break;
  }
}

function playUltimateRandomizer() {
  const randomScope = prompt('Input a limit of random scope:');
  alert(`Random number between 1 and ${randomScope} is: ${randomNumber(randomScope)}`);
}

function playSuperRandomizer() {
  const startOfRandomScope = Number(prompt('Input a start of random scope:'));
  const endOfRandomScope = Number(prompt('Input a end of random scope:'));
  alert(`Random number between ${startOfRandomScope} and ${endOfRandomScope} is: ` +
           `${randomNumber(endOfRandomScope, startOfRandomScope)}`);
}

function  playJSQuze() {
  const answer = prompt('What is the oficial name of JavaScript?');
  answer == 'ECMAScript' ?  alert('You are right!') : alert('Do not know? - "ECMAScript"');

  // if (answer == 'ECMAScript') {
  //   alert('You are right!');
  // } else {
  //     alert('Do not know? - "ECMAScript"')
  //   }
}

function doLogin () {
  const login =  prompt('Enter login name:');

  if ('admin' == login || 'Admin' == login) {
    const psw = prompt('Please enter PASSWORD: ');
    if ('blacklord' == psw) {
      alert('Welcome!!!')
    } else if (null === psw) {
      alert('Login canceled');
    } else { 
      alert('Password is invalid. Access denied');
    }
  } else if (null === login) {
    alert('Login canceled');
  } else {
    alert('This name is not exist. Access denied');
  }
}