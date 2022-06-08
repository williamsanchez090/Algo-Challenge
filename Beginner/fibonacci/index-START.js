/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/
function fibonacci(n) {
    let a = 1, b = 2, c = n;
  
  for(let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  
  return c;
}
module.exports = fibonacci