/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(input) {
    let vowelsCount = 0;
    let inputLetters = input.toLowerCase().split("");
    
    const vowels = ["a","e","i","o","u"];
    
    vowels.forEach(function(vowel) {
      inputLetters.forEach(function(inpLetter) {
        if (inpLetter === vowel) {
          vowelsCount++;
        }
      });
    });
        
    return vowelsCount;
  }

module.exports = vowelsCounter;
