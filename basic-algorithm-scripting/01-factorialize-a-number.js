/**
 * Factorialize a Number
 * -----------------------
 * Return the factorial of the provided integer.
 *
 * If the integer is represented with the letter n, a factorial is the product
 * of all positive integers less than or equal to n.
 *
 * Only integers greater than or equal to zero will be supplied to the function.
 */
function factorialize(num) {
  /**
   * Since the return values for the function will always be greater than or equal to 1,
   * product is initialized at one. For the case where the number is 0, the for
   * loop condition will be false, but since product is initialized as 1, it will
   * have the correct value where the return statement is executed.
   *
   * For all numbers passed to the function which are greater than one,
   * the simple for loop will decrement num by one each iteration and
   * recalculate product down to the value 1.
   */
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

function factorializeTwo(num) {
  /**
   * Condition to check the end of the recursion. If num == 0, then we return 1,
   * i.e. effectively ending the recursion and informing the stack to propagate
   * this value to the upper levels. If we do not have this condition, the recursion
   * would go on until the stack space gets consumed, thereby resulting in a stack overflow.
   */
  if (num === 0) {
    return 1;
  }
  return num * factorializeTwo(num - 1);
}

/**
 * In this solution, we use tail recursion to optimize the memory use.
 *
 * In traditional head recursion, the typical model is that you perform your
 * recursive calls first, and then you take the return value of the recursive call
 * and calculate the result.
 *
 * In tail recursion, you perform your calculations first, and then you execute
 * the recursive call, passing the results of your current step to the next recursive step.
 * This results in the last statement being in the form of (return (recursive-function params)).
 *
 * In this solution, with each evaluation of the recursive call, the factorial is updated.
 * This is different from the head-recursive solution where all evaluation calculations
 * are stored on the stack until the base case is reached.
 */
function factorializeThree(num) {
  if (num == 0) {
    return factorial;
  } else {
    return factorializeThree(num - 1, factorial * num);
  }
}

function factorializeFour(num, factorial = 1) {
  return num < 0
    ? 1
    : new Array(num) // create an array which has length `num`.
        /**
         * fill all elements of the array as `undefined`.
         *
         * In this case, we have to do this because empty arrays aren't reducible.
         */
        .fill(undefined)
        /**
         * reduce() function is used to find the factorial value of the number.
         *
         * In the reduce function's accumulator is calling product, this is also our final value.
         * We are multiplying our index value with the product to find the factorial value.
         * We are setting product's initial value to 1 because if it was 0, products gets 0 always.
         * Also the factorial value can't calculate for negative numbers.
         */
        .reduce((product, val, index) => product * (index + 1), 1);
}

console.log(factorialize(5));
console.log(factorializeTwo(5));
console.log(factorializeThree(5));
console.log(factorializeFour(5));
