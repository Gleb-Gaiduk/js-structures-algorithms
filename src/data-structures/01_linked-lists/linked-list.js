const LinkedListNode = require('./list-node');

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    if (this._head === null || this._tail === null) {
      this._head = newNode;
      this._tail = newNode;

      return this;
    }

    this._tail.next = newNode;
    this._tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this._head);
    this._head = newNode;

    if (this._tail === null) {
      this._tail = newNode;
    }

    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this._head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
}

module.exports = LinkedList;
