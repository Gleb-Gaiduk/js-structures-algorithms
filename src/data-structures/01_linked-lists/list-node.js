class LinkedListNode {
  constructor(value, next) {
    this._value = value;

    if (next) {
      this._next = next;
    } else this._next = null;
  }

  toString() {
    return `${this._value}`;
  }

  get next() {
    return this._next;
  }

  set next(node) {
    this._next = node;
  }
}

module.exports = LinkedListNode;
