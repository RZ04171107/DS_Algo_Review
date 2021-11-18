class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Big O of stacks:
// Insertion: O(1)
// Removal: O(1)
// Searching O(n)
// Access O(n)
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }
  push(value) {
    var newNode = new Node(value);
    if (this.size === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      var prevTop = this.top;
      this.top = newNode;
      this.top.next = prevTop;
    }
    return ++this.size;
  }

  pop() {
    if (!this.top) return null;
    var temp = this.top;
    if (this.size === 1) {
      this.top = null;
      this.bottom = null;
    }
    if (this.size > 1) {
      this.top = temp.next;
    }
    this.size--;
    return temp.value;
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
