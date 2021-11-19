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

  DFSPreOrder() {
    // create a variable to store the values of nodes visited
    // store the root of the BST in a variable called current
    var visited = [];
    // write a helper function which accepts a node
    //   * push the value of the node to the variable that stores the value
    //   * if the node has a left property, call the helper function with the left property on the node
    //   * if the node has a right property, call the helper function with the right property on the node
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  DFSPostOrder() {
    // left side -> righ side -> node

    var visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }

  DFSInOrder() {
    //left -> node(middle) -> right
    var visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  // DFS - InOrder
  // used commonly with BST's
  // Notice we get all nodes in the tree in their underlying order
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
console.log('BFS:', tree.BreadthFirstSearch());
console.log('DFS Pre:', tree.DFSPreOrder());
console.log('DFS Post:', tree.DFSPostOrder());
console.log('DFS In:', tree.DFSInOrder());
