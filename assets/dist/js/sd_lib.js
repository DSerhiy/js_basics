/**
 *  getRandomNumber(end, start = 0): 
 *  returns Pseudo random number within specified range; 
 * @param {*} end - 'Number'  max range value (not included)
 * @param {*} start - 'Number ' min range value (included)
 * @return - Number; 
 */
function getRandomNumber(end, start = 0) {
  return Math.floor(Math.random() * (end - start) ) + start ;
}

/**
 * ucFirst(str):
 * returns a new string with first letter uppercased;
 * @param {*} str - 'String'  
 * @return - 'String'
 */
function ucFirst(str) {  
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * min(a, b):
 * returns  a smaller of two numbers
 * @param {*} a - 'Number'
 * @param {*} b - 'Number'
 * @return - 'Number'
 */
function min(a, b) {
  return a<=b ? a : b;
}

/**
 * getNumber(min):
 * returns a user's number, that is greater than specified one;
 * @param {*} min - 'Number' 
 */
function getNumber(min) {

  let userNumber = 'first iteration';
  
  do {
    userNumber = (userNumber === 'first iteration') ? 
      prompt(`Please insert the number greater than ${min}:`):
      prompt(
        `Please double check and insert correct(*) number\n` + 
        `* The number should be greater than ${min}`);
   
    if (userNumber === null) return;    // checking for ESC or CANCEL push; 
    userNumber = Number(userNumber);
    
    while (isNaN(userNumber)) 
      userNumber = prompt(`Please insert valid number not a string.`);

    if (userNumber === null) return; // checking for ESC or CANCEL push; 
    userNumber = Number(userNumber);

  } while(userNumber <= min)
  
  return userNumber;    
}

/**
 * printPrimeNumbers(min, max):
 * Prints prime numbers within specified range
 * @param {*} min -  'Number'  max range value
 * @param {*} max - 'Number ' min range value 
 */
function primeNumbers(min, max) {
  min = min > 2 ? min : 2;

  for (let i = min; i <= max; i++) {
    let j = 2;
    while(j <= i - 1 && j != 0) 
      (i % j != 0) ? j++ : j = 0;    
    
    if(j == i) 
      console.log(i); 
  }
}
