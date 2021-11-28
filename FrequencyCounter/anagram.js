/* Anagram
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinima, formed from iceman.
 *
 *  validAnagram('', '') //true
 *  validAnagram('aaz', 'zza') //false
 *  validAnagram('anagram', 'nagaram') //true
 *  validAnagram('rat', 'car') //false
 *  validAnagram('awesome', 'awesom') //false
 *  validAnagram('qwerty', 'qeywrt') //true
 */

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let char of str1) {
    // if char exists, increment, otherwise set to 1
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let char of str2) {
    // cannot find char or char is zero then it's not an anagram
    if (!obj[char]) {
      return false;
    } else {
      obj[char] -= 1;
    }
  }
  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
