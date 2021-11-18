class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    //add node from tail
    var newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    //remove node from head
    if (this.size === 0) return null;
    var temp = this.head;
    if (this.size === 1) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return temp.value;
  }
}
var q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.dequeue();
console.log(q);
