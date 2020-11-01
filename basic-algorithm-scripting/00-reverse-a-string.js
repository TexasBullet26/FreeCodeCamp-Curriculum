/**
 * Reverse a String
 * --------------------
 * Reverse the provided string.
 *
 * You may need to turn the string into an array before you can reverse it.
 *
 * Your result must be a string.
 */
function reverseString(str) {
  /**
   * split() - function will turn our string into an array of characters.
   *
   * reverse() - function takes our array of characters and reverses them.
   *
   * join() - puts our characters back together into a string.
   */
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
