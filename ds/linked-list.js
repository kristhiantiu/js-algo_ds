class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if(this.head === null) {
      this.head = node;
      this.tail =  node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1
    return this
  }

  traverse() {
    let curNode = this.head
    while(curNode) {
      console.log(curNode)
      curNode = curNode.next
    }
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    const nodeToPop = this.tail;
    console.log('to pop', nodeToPop)
    let curNode = this.head;
    console.log('cur node', curNode)
    while(curNode && curNode.next !== nodeToPop) {
      curNode = curNode.next;
    }
    this.length -= 1;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      let preTail = curNode;
      preTail.next = null;
      this.tail = preTail;
    }
    return nodeToPop;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const nodeToPop = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return nodeToPop
  }

  unshift(val) {
    const newHeadNode = new Node(val);
    newHeadNode.next = this.head;
    if(!this.head) {
      this.head = newHeadNode;
      this.tail = newHeadNode;
    } else {
      this.head = newHeadNode; 
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null
    }
    let curNode = this.head;
    let curIndex = 0;
    while(curIndex !== index) {
      curNode = curNode.next
      ++curIndex;
    }
    return curNode
  }

  set(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    
    const curNodeOnIndex = this.get(index)
    if (curNodeOnIndex) {
      curNodeOnIndex.val = val
      return true
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    
    if (index === 0) {
      this.unshift(val)
    } else if (index === this.length) {
      this.push(val)
    } else {
      const newNode = new Node(val)
      const curNodeOnIndex = this.get(index)
      newNode.next = curNodeOnIndex
    }
    this.length += 1
    return true
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let prevNode, nodeToDelete;
      prevNode = this.get(index - 1);
      nodeToDelete = prevNode.next;
      prevNode.next = nodeToDelete.next;
      return nodeToDelete;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next, prev = null;
    let i = 0;
    while(i < this.length) {
      console.log('yo')
      // point cur next to previous
      next = node.next;
      node.next = prev;

      // navigate
      prev = node;
      node = next;
      ++i;
    }
    return this;
  }


  reverseFromColt() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next, prev = null;
    for (let i = 0; i < this.length; ++i) {
      next = node.next; //keeping old next, and using it for next
      node.next = prev;
      // move pointers
      prev = node;
      node = next;
    }
    return this;
  }

  reverseBad() {
    // start from the head and shift the next of each next node to previous
    if (!this.head || this.length === 1) {
      return this;
    }
    this.tail = this.head;
    let prev, node, next;
    prev = this.head;
    node = prev.next;

    // point node next to prev
    next = node.next // store old next
    node.next = prev;
    while (next) {
      console.log('yoo')
      prev = node;
      node = next;

      next = node.next //   old next
      node.next = prev;
    }
    this.head = node;
    this.tail.next = null;
  }
}


const mySinglyLinkedList = new SinglyLinkedList()
mySinglyLinkedList.push(1)
mySinglyLinkedList.push(2)
mySinglyLinkedList.push(3)
mySinglyLinkedList.push(4)
// mySinglyLinkedList.traverse()
// let out = mySinglyLinkedList.pop()
// console.log('POPPED', out)
// mySinglyLinkedList.traverse()
// out = mySinglyLinkedList.pop()
// console.log('POPPED', out)
// out = mySinglyLinkedList.pop()
// console.log('POPPED', out)
console.log('------')
mySinglyLinkedList.traverse()
console.log('------')
mySinglyLinkedList.reverse()
console.log('------ after reverse')
mySinglyLinkedList.traverse()
console.log('------')
// mySinglyLinkedList.shift()
// mySinglyLinkedList.shift()
// mySinglyLinkedList.shift()
// mySinglyLinkedList.traverse()
// console.log('--------- set first')
// console.log(mySinglyLinkedList.set(0, 'FIRST'))
// console.log('--------- set last')
// console.log(mySinglyLinkedList.set(4, 'LAST'))