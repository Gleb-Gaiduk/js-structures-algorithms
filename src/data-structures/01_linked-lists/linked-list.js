const { ListNode } = require('./list-node');
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const nodeValue = new ListNode(value, null);

    if (this.head === null) {
      this.head = nodeValue;
      this.tail = nodeValue;
      return this;
    }

    if (this.head.next === null) {
      this.head.next = nodeValue;
      this.tail = nodeValue;
      return this;
    }

    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;

      if (currentNode.next === null) {
        currentNode.next = nodeValue;
        this.tail = nodeValue;
        return this;
      }
    }
  }

  prepend(value) {
    const newValueNode = new ListNode(value, null);

    if (this.head === null) {
      this.head = newValueNode;
      this.tail = newValueNode;
      return this;
    }

    newValueNode.next = this.head;
    this.head = newValueNode;
    return this;
  }

  find(primitiveValue) {
    if (this.head === null) {
      return null;
    }

    if ((this.head.value === this.tail.value) === primitiveValue) {
      return this.head;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === primitiveValue) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(primitiveValue) {
    if (this.head === null) {
      return null;
    }

    let deletedNode = null;

    while (this.head !== null && this.head.value === primitiveValue) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next !== null) {
        if (currentNode.next.value === primitiveValue) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail !== null && this.tail.value === primitiveValue) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  toArray() {
    const result = [];

    if (this.head === null) {
      return result;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      result.push(currentNode);
      currentNode = currentNode.next;
    }

    return result;
  }
}

module.exports = { LinkedList };
