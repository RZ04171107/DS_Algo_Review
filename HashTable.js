// Hash tables are used to store key-value pairs
// They are like arrays, but the keys are not ORDERED.

// In order to look up values by key, we need a way to convert keys into valid array indices.
// A function that performs this task is called a hash function.

// a basic hash that works on strings only
// version 1.0
function hash_1(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, etc
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// current hash (v1.0) has problems:
// 1. Only hashes strings(wont worry about this)
// 2. Not constant time - linear in key length
// 3. Could be a little more random

function hash_2(key, arrayLen) {
  let total = 0;
  // The prime number in the hash is helpful in spreading out the keys more uniformly.
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen; // it's better to have a prime array length as well
  }
  return total;
}

// Dealing with collisions:
// 1. Separate Chaining : at each index in our array, we store values using a more sophisticated data structure(e.g. an array or a linked list)
// 2. Linear Probing : when we find a collision, we search through the array to find the next empty slot.

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    // accept a key - value pair
    // hash the key
    // store the key-value pair in the hash table array via separate chaining
    let hashedIdx = this._hash(key);
    if (!this.keyMap[hashedIdx]) {
      this.keyMap[hashedIdx] = [];
    }
    this.keyMap[hashedIdx].push([key, value]);
  }

  get(key) {
    // accept a key
    // hash the key
    // retrieve the key-value paire in the hash table
    // if the key is not found, return undefined
    let hashedIdx = this._hash(key);
    var innerAry = this.keyMap[hashedIdx];
    if (!innerAry) return undefined;
    for (let elem of innerAry) {
      if (elem[0] === key) return elem[1];
    }
  }

  keys() {
    // loop through the hash table array and return an array of keys in the table
    var keys = [];
    this.keyMap.forEach((arr) => {
      arr &
        arr.forEach((elem) => {
          if (!keys.includes(elem[0])) {
            keys.push(elem[0]);
          }
        });
    });
    return keys;
  }

  values() {
    var values = [];
    this.keyMap.forEach((arr) => {
      arr &
        arr.forEach((elem) => {
          if (!values.includes(elem[1])) {
            values.push(elem[1]);
          }
        });
    });
    return values;
  }
}

var ht = new HashTable(17);
ht.set('maroon', '#8000000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumviolitred', '#C71585');
ht.set('plum', '#DDA0DD');
console.log(ht.keyMap);
console.log(ht.get('maroon'));
console.log(ht.keys());
console.log(ht.values());
