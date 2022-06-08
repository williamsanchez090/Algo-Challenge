/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  var splitText = text.toLowerCase().split(' ');
  for (var i = 0; i < splitText.length; i++) {
      splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);     
  }
  return splitText.join(' '); 
}

module.exports = capSentence