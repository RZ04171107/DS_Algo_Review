// USES OF TREES
// * html DOM
// * JSON
// * Network Routing
// * Abstract Syntax Tree
// * Artificial Intelligence
// * Folders in Operating Systems
// * Computer File Systems

// BST - nodes can have at most 2 children
// left child < node < right child

// Big O of BST
// Insertion - O(log n)
// Searching - O(log n)

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    //create a new node
    var newNode = new Node(value);
    //check if there is a root
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    //when there is a root, check new node is > or < than the root
    var currentNode = this.root;
    while (true) {
      if (newNode.value > currentNode.value) {
        //check to see if there is a node be the right child of currentNode
        if (currentNode.right === null) {
          //add the new node as the right child of currentNode
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      } else if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        console.log('ERROR: value exist');
        return false;
      }
    }
  }

  search(value) {
    //search a node in BST, return the node if it be found
    if (this.root === null) return false;
    var currentNode = this.root;
    var found = false;
    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return currentNode;
  }

  contains(value) {
    //search a node in BST, return boolean
    if (this.root === null) return false;
    var currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // BFS: Breadth First Search
  // create a queue(this can be an array) and a variable to store the values of nodes visited
  // place the root node in the queue
  // loop as long as there is anything in the queue
  //  * dequeue a node from the queue and push the value of the node into the variable that stores the nodes
  //  * if there is a left property on the node dequeued - add it to the queue
  //  * if there is a right property on the node dequeued = add it to the queue
  BreadthFirstSearch() {
    var fakeQueue = []; //push for enqueue, shift for dequeue
    var visited = [];
    fakeQueue.push(this.root);

    // Iteratively
    // while (fakeQueue.length > 0) {
    //   var node = fakeQueue.shift();
    //   visited.push(node.value);
    //   if (node.left) {
    //     fakeQueue.push(node.left);
    //   }
    //   if (node.right) {
    //     fakeQueue.push(node.right);
    //   }
    // }

    // recursion:
    function recursionHelper(fakeQueue) {
      if (fakeQueue.length === 0) return; //base case
      var node = fakeQueue.shift();
      visited.push(node.value);
      if (node.left) {
        fakeQueue.push(node.left);
      }
      if (node.right) {
        fakeQueue.push(node.right);
      }
      recursionHelper(fakeQueue);
    }
    recursionHelper(fakeQueue);

    return visited;
  }
}

var tree = new BST();
//        10
//   5         13
// 2   7     11   16
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);
console.log(tree.BreadthFirstSearch());
