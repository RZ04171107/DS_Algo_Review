// piece of data -val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // initial value of next points to null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      //if the list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  traverse() {
    //print out every node.val
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let pre = this.head;
    let current = pre.next;
    while (current !== this.tail) {
      current = current.next;
      pre = pre.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    //remove the head node
    if (!this.head) {
      return undefined;
    }
    var oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val) {
    // add a new node to the beginning of the linked list
    var newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    // retrieve a node by it's position in the linked list
    if (index < 0 || index >= this.length) {
      return null;
    }
    var pointerNode = this.head;
    for (let count = 0; count < index; count++) {
      pointerNode = pointerNode.next;
    }
    //console.log(pointerNode);
    return pointerNode;
  }

  set(index, value) {
    // change the value of a node based on it's position in the linked list
    var foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }
    foundNode.val = value;
    return true;
  }

  insert(index, value) {
    // add a node to the linked list at a specific position
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    var preNode = this.get(index - 1);
    var newNode = new Node(value);
    newNode.next = preNode.next;
    preNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    // remove a node from the linked list at a specific position
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      //if remove the first node
      return this.shift();
    }
    if (index === this.length - 1) {
      // if remove the tail
      return this.pop();
    }
    var preNode = this.get(index - 1);
    var removed = preNode.next;
    preNode.next = removed.next;
    this.length--;
    return removed;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    //a common interview question
    // swap the head and the tail
    var t = this.tail;
    this.tail = this.head;
    this.head = t;
    // some variables
    var prevNode = null;
    var nextNode = null;
    var current = this.tail;
    // loop through the list
    while (current) {
      nextNode = current.next; // set next to be the next property on whatever node is
      if (prevNode) {
        current.next = prevNode; // set the next property on the node to be whatever prev is
      } else {
        current.next = null;
      }
      // set prev to be the value of the node variable
      prevNode = current;
      // set the node variable to be the value of the next variable
      current = nextNode;
    }
    this.print();
    return this;
  }
}

var list = new SinglyLinkedList();
list.push('Hello 0');
list.push('world 1');
list.push('goodbye 2');
list.push('meow 3');
list.push(':)  4');

list.reverse();
//console.log(list);
//list.traverse();
