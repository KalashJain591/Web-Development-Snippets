function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
 
// Driver Code
let num = 5;
let power = Math.pow(5, 2);
//console.log(power); 

document.write("Factorial of " + num + " is " + factorial(num));
document.write("Power of " + num + " is " + power); 
