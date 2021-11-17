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
}

var list = new SinglyLinkedList();
list.push('Hello');
list.push('world');
list.push('goodbye');
list.push(':)');
//list.traverse();
// list.shift();
// list.unshift('@@');
//list.traverse();
//console.log(list);
list.get(1);
console.log(list.get(3));
