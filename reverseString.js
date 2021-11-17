// create a function that reverses a string:
// "Hi my name is Ingrid" should be:
// "dirgnI si eman ym iH"

function reverse(str) {
  const ary = [];
  for (let i = str.length - 1; i >= 0; i--) {
    ary.push(str.charAt(i));
  }
  return ary.join("");
}

const mystr = "Hi my name is Ingrid";

console.log(reverse(mystr));
