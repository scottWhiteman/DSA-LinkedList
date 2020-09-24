const _DNode = require('./DNode');

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _DNode(item, this.head, null)
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _DNode(item, null, tempNode);
      this.tail = tempNode.next;
    }
  }
  insertBefore(newItem, searchItem) {
    if (this.head === null) {
      return null;
    }
    if (this.head.value === searchItem) {
      this.insertFirst(newItem);
      return;
    }
    let current = this.head;
    while (current !== null && current.value !== searchItem) {
      current = current.next;
    }
    if (current === null) {
      console.log('Not Found')
      return;
    }
    current.prev.next = new _DNode(newItem, current, current.prev);
  }
  insertAfter(newItem, searchItem) {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    while (current !== null && current.value !== searchItem) {
      current = current.next;
    }
    if (current === null) {
      console.log('Not Found');
      return;
    }
    else {
      current.next = _DNode(newItem, current.next, current);
    }
  }
  find(item) {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    while (current !== null) {
      if (current.value === item) {
        return current;
      }
      else {
        current = current.next;
      }
    }
    return null;
  }
  remove(item) {
    if (this.head === null) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current !== null && current.value !== item) {
      current = current.next;
    }
    if (current === null) {
      console.log('Not Found');
      return null;
    }
    current.prev.next = current.next;
    if (current.next !== null) {
      current.next.prev = current.prev;
    }
  }
  display() {
    if (this.head === null) {
      return null;
    }
    let current = this.head;
    while (current !== null) {
      console.log(current.value)
      current = current.next;
    }
  }
}

module.exports = DoubleLinkedList;