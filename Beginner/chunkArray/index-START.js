/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function chunkArray(array, size) {
    // Code goes here
    let newArray = []
    for (i = 0; i < array.length; i += size){
        array.splice(i,i + size)
    }
    return newArray
}

function chunkArray(array, size) {
    let result = []

    for (i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }

    return result
}


module.exports = chunkArray