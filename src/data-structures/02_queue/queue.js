const { QueueNode } = require('./queue-node');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  // Read the element at the front of the queue without removing it.
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head;
  }

  // Add a new element to the end of the queue
  add(value) {
    const newNode = new QueueNode(value, null);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.tail.next = null;

    return this;
  }

  // Remove the element at the front of the queue
  remove() {
    if (this.isEmpty()) {
      return null;
    }

    const removedValue = this.head.value;

    if (this.head.value === this.tail.value) {
      this.head = null;
      this.tail = null;

      return removedValue;
    }

    this.head = this.head.next;

    return removedValue;
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

module.exports = { Queue };
