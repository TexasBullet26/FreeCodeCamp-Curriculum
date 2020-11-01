/**
 * Find the Longest Word in a String
 * -------------------------------------
 *
 * Return the length of the longest word in the provided sentence.
 *
 * Your response should be a number.
 */
function findLongestWordLength(str) {
  return str.split(" ").reduce(function (x, y) {
    return Math.max(x, y.length);
  }, 0);
}

function findLongestWordLengthTwo(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
console.log(
  findLongestWordLengthTwo("The quick brown fox jumped over the lazy dog")
);
