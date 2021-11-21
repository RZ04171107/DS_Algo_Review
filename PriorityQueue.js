class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  printQueue() {
    this.values.forEach((node) => {
      console.log(`priority level: ${node.priority} - value: ${node.val}`);
    });
  }
  bubbleUp() {
    // here is a Min Binary Heap - lower number means higher priority
    let index = this.values.length - 1;
    const elem = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentElem = this.values[parentIndex];
      if (elem.priority < parentElem.priority) {
        [this.values[index], this.values[parentIndex]] = [
          this.values[parentIndex],
          this.values[index],
        ];
      } else {
        return;
      }
      //update the index
      index = parentIndex;
    }
  }

  sinkDown() {
    var idx = 0;
    while (idx >= 0) {
      var leftIdx = 2 * idx + 1;
      var rightIdx = 2 * idx + 2;
      var minChildIdx;
      if (leftIdx >= this.values.length && rightIdx >= this.values.length) {
        // child indexes out of bound, which means do not have any child
        return;
      } else if (leftIdx === this.values.length - 1) {
        minChildIdx = leftIdx; // only have a left child
      } else {
        // other ragular cases:
        this.values[leftIdx].priority < this.values[rightIdx].priority
          ? (minChildIdx = leftIdx)
          : (minChildIdx = rightIdx);
      }
      if (this.values[idx].priority > this.values[minChildIdx].priority) {
        [this.values[idx], this.values[minChildIdx]] = [
          this.values[minChildIdx],
          this.values[idx],
        ]; //ES6 swap
        idx = minChildIdx;
      } else {
        return;
      }
    }
  }

  Enqueue(val, priority) {
    var newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  Dequeue() {
    // remove root element, return it, and rearrage heap using priority;
    // Swap the first node in the values property with the last node
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    // Pop from the values property, so you can return the value at the end;
    var min = this.values.pop();
    // Have the new root "sink down" to the correct spot...
    this.sinkDown();
    return min;
  }
}

var todos = new PriorityQueue();
todos.Enqueue('common cold', 5);
todos.Enqueue('gunshot wound', 1);
todos.Enqueue('high fever', 4);
todos.Enqueue('broken arm', 2);
todos.Enqueue('glass in foot', 3);

todos.printQueue();
todos.Dequeue();
//todos.printQueue();
console.log(todos.values);
