/**
 * Sum All Numbers in a Range:
 * ------------------------------
 * Create a program that will take an array of two numbers who are not
 * necessarily in order, and then add not just those numbers but any
 * numbers in between. For example, [3,1] will be the same as 1+2+3 and not just 3+1.
 */
function sumAll(arr) {
  // Create a variable sum to store the sum of the elements.
  let sum = 0;
  /**
   * Start iteration of the loop from min element of given array
   * and stopping when it reaches the max element.
   *
   * Using a spread operator (...arr) allows passing the actual array
   * to the function instead of one-by-one elements.
   *
   * Helpful Links:
   *------------------
   * Spread Operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
   * Using Spread Operator in Math.max() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
   */
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);
