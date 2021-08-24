class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let curRoot = this.root;
    while(true) {
      if (val === curRoot.value) {
        return undefined;
      } else if (val < curRoot.value) { // left
        if (curRoot.left === null) {
          curRoot.left = newNode;
          return this;
        } else {
          curRoot = curRoot.left;
          continue;
        }
      } else if (val > curRoot.value) { //right
        if (curRoot.right === null) {
          curRoot.right = newNode;
          return this;
        } else {
          curRoot = curRoot.right;
          continue;
        }
      }
    }
  }

  search(val) {
    function look(root, val) {
      if (root === null) {
        return false;
      }
      if (root.value == val) {
        return true;
      }
      return (val < root.value) 
        ? look(root.left, val) // left
        : look(root.right, val); // right
    }
    return look(this.root, val)
  }

  bfs() {
    const queue = []// push + shift
    let visited = []
    queue.push(this.root);
    while(queue.length > 0) {
      const node = queue.shift()
      visited.push(node.value)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return visited;
  }

  dfs() { // preorder all left, all right
    let visited = [];
    let current = this.root;
    function preorder(node) {
      visited.push(node.value);
      if (node.left) {
        preorder(node.left)
      }
      if (node.right) {
        preorder(node.right)
      }
    }

    function postorder(node) {
      if (node.left) {
        preorder(node.left)
      }
      if (node.right) {
        preorder(node.right)
      }
      visited.push(node.value);
    }

    function inorder(node) {
      if (node.left) {
        preorder(node.left)
      }
      visited.push(node.value);
      if (node.right) {
        preorder(node.right)
      }
    }


    inorder(current)
    return visited
  }

  find(val) {
    if (this.root === null) {
      return false;
    }
    let currentRoot = this.root;
    while (true) {
      if (currentRoot === null) {
        return false;
      }
      if (val === currentRoot.value) {
        return true;
      }
      if (val < currentRoot.value) { // left
        currentRoot = currentRoot.left;
      } else if (val > currentRoot.value) { // left
        currentRoot = currentRoot.right;
      }
    }
  }
}

const bts = new BinarySearchTree()
bts.insert(10)
bts.insert(9)
bts.insert(8)
bts.insert(22)
bts.insert(100)
bts.insert(1000)
console.log(bts.bfs())
console.log(bts.dfs())
// console.log(bts.find(10))
// console.log(bts.find(8))
// console.log(bts.find(9))
// console.log(bts.find(11))
// console.log('using helper recursion')
// console.log(bts.search(10))
// console.log(bts.search(8))
// console.log(bts.search(9))
// console.log(bts.search(11))