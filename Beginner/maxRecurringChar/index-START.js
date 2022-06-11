/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    let num = 0
   let str = ''
   text.split('').forEach( x => {
       if( text.split(x).length > num){
           num = text.split(x).length
           str = x
       }
   })
   return str
}  




module.exports = maxRecurringChar;