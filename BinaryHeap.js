// Very similar to a binary search tree, but with some different rules

// In a MaxBinaryHeap, parent nodes are always larger than child nodes.
// In a MinBinaryHeap, parent nodes are always smaller than child nodes.
// No impled ordering between siblings.
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

// REPRESENTING A HEAP WITH AN ARRAY:
// For any parent node: array[n]
// The left child: array[2n+1], the right child: array[2n+2]

// For any child node at index n:
// Its parent is at index (n-1)/2 (floored to an integer)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  printHeap() {
    console.log(this.values);
  }
  bubbleUp() {
    // Bubble up:
    //   * Create a variable called index which is the length of the values property -1
    //   * Create a variable called parentIndex which is the floor of (index-1)/2
    let index = this.values.length - 1;
    const elem = this.values[index];

    //   * Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (elem > parent) {
        this.values[parentIndex] = elem;
        this.values[index] = parent;
        index = parentIndex;
      } else {
        return;
      }
    }
  }
  sinkDown() {
    // Parent index should start at 0(the root)
    var idx = 0;
    // Find the index of the left child: 2*index + 1 (make sure its not out of bounds)
    // Find the index of the right child: 2*index + 2
    // If the left of right child is greater than the element, swap. If both left and right children are larger, swap with the largest child.
    // The child index you swapped to now becomes the new parent index.
    // Keep looping and swapping until neither child is larger than the element.
    while (idx >= 0) {
      var leftIdx = 2 * idx + 1;
      var rightIdx = 2 * idx + 2;
      var largerChildIdx;
      if (leftIdx >= this.values.length && rightIdx >= this.values.length) {
        // child indexes out of bound, which means do not have any child
        return;
      } else if (leftIdx === this.values.length - 1) {
        largerChildIdx = leftIdx; // only have a left child
      } else {
        // other ragular cases:
        this.values[leftIdx] > this.values[rightIdx]
          ? (largerChildIdx = leftIdx)
          : (largerChildIdx = rightIdx);
      }

      if (this.values[idx] < this.values[largerChildIdx]) {
        [this.values[idx], this.values[largerChildIdx]] = [
          this.values[largerChildIdx],
          this.values[idx],
        ]; //ES6 swap
        idx = largerChildIdx;
      } else {
        return;
      }
    }
  }
  insert(value) {
    // Push the value into the values property on the heap
    this.values.push(value);
    this.bubbleUp();
  }
  extractMax() {
    // Swap the first value in the values property with the last one
    // ES6 swap: [a, b] = [b, a]
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    // Pop from the values property, so you can return the value at the end;
    var max = this.values.pop();
    // Have the new root "sink down" to the correct spot...
    this.sinkDown();
    return max;
  }
}

var heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// [55, 39, 41, 18, 27, 12, 33]
heap.printHeap();

console.log(heap.extractMax());
heap.printHeap();
console.log(heap.extractMax());
heap.printHeap();
console.log(heap.extractMax());
heap.printHeap();
console.log(heap.extractMax());
heap.printHeap();
console.log(heap.extractMax());
heap.printHeap();
console.log(heap.extractMax());
heap.printHeap();
console.log(heap.extractMax());
heap.printHeap();
