/* Sliding Window Exercise:
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 *
 * Time Complexity: O(n)
 *
 * findLongestSubstring('') //0
 * findLongestSubstring('rithmschool') //7
 * findLongestSubstring('thisisawesome')  //6
 * findLongestSubstring('bbbbbb') //1
 */

function findLongestSubstring(str) {
  var left = 0;
  var right = 0;
  if (str.length === 0) return 0;
  var longestLen = 1;
  var window = '';
  // if do not have any char repeated, move the window to right
  // if have char repeated, shrink the window until crossing the last certain char
  while (right < str.length) {
    if (!window.includes(str[right])) {
      right++;
      //console.log(`right: ${str[right]}`);
    } else if (window.includes(str[right])) {
      left++;
      //console.log(`left: ${str[left]}`);
    }
    window = str.slice(left, right);
    //console.log(`window: ${window}`);
    longestLen = Math.max(longestLen, window.length);
  }
  return longestLen;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));
