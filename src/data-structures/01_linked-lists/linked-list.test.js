const { LinkedList } = require('./linked-list');

describe('Linked list', () => {
  let list = null;
  beforeEach(() => {
    list = new LinkedList();
  });

  describe('append', () => {
    it('should append one value and set the correct head and tail', () => {
      const appendValue = 'a';
      list.append(appendValue);
      listArray = list.toArray();

      expect(listArray.length).toBe(1);
      expect(listArray[0].value).toEqual(appendValue);
      expect(listArray[0].next).toEqual(null);
      expect(list.tail.value).toBe(appendValue);
      expect(list.head.value).toBe(appendValue);
    });

    it('should append a few values and set the correct head and tail', () => {
      list.append('a').append('b').append('c').append('d');
      listArray = list.toArray();

      expect(listArray.length).toBe(4);
      expect(list.head.value).toBe('a');
      expect(listArray[0].value).toEqual('a');
      expect(listArray[0].next.value).toEqual('b');

      expect(listArray[1].value).toEqual('b');
      expect(listArray[1].next.value).toEqual('c');

      expect(listArray[2].value).toEqual('c');
      expect(listArray[2].next.value).toEqual('d');

      expect(listArray[3].value).toEqual('d');
      expect(listArray[3].next).toEqual(null);

      expect(list.tail.value).toBe('d');
      expect(list.tail.next).toBe(null);
    });
  });

  describe('prepend', () => {
    it('should append one value correctly and set the correct head and tail', () => {
      list.prepend('a');
      listArray = list.toArray();

      expect(listArray.length).toBe(1);
      expect(listArray[0].value).toBe('a');
      expect(listArray[0].next).toBe(null);
      expect(list.head.value).toBe('a');
      expect(list.tail.value).toBe('a');
    });

    it('should append a few values correctly and set the correct head and tail', () => {
      list.prepend('a').prepend('b').prepend('c');
      listArray = list.toArray();

      expect(listArray.length).toBe(3);
      expect(list.head.value).toBe('c');

      expect(listArray[0].value).toBe('c');
      expect(listArray[0].next.value).toBe('b');

      expect(listArray[1].value).toBe('b');
      expect(listArray[1].next.value).toBe('a');

      expect(listArray[2].value).toBe('a');
      expect(listArray[2].next).toBe(null);

      expect(list.tail.value).toBe('a');
    });
  });

  describe('find', () => {
    it('should find a correct ListNode passing a primitive value', () => {
      list.append('a').append('b').append('c');
      const foundNode1 = list.find('b');

      expect(foundNode1.value).toBe('b');
      expect(foundNode1.next.value).toBe('c');

      const foundNode2 = list.find('a');

      expect(foundNode2.value).toBe('a');
      expect(foundNode2.next.value).toBe('b');

      const foundNode3 = list.find('c');

      expect(foundNode3.value).toBe('c');
      expect(foundNode3.next).toBe(null);
    });

    it('should return null if a node is not found', () => {
      list.append('a').append('b').append('c');
      const foundNode = list.find('x');

      expect(foundNode).toBe(null);
    });
  });

  describe('delete', () => {
    it('should return null if there is no node with a provided value', () => {
      list.append('a').append('b').append('c');
      const removedElement = list.delete('x');

      expect(removedElement).toBe(null);
    });

    it('should delete a node with a passed primitive value and return that node from the beggining', () => {
      list.append('a').append('b').append('c');
      const removedElement = list.delete('a');

      expect(removedElement.value).toBe('a');
      expect(list.head.value).toBe('b');
      expect(list.head.next.value).toBe('c');
      expect(list.tail.value).toBe('c');
      expect(list.tail.next).toBe(null);
    });

    it('should delete a node with a passed primitive value and return that node from the middle', () => {
      list.append('a').append('b').append('c');
      const removedElement = list.delete('b');

      expect(removedElement.value).toBe('b');
      expect(list.head.value).toBe('a');
      expect(list.head.next.value).toBe('c');
      expect(list.tail.value).toBe('c');
      expect(list.tail.next).toBe(null);
    });

    it('should delete a node with a passed primitive value and return that node from the end', () => {
      list.append('a').append('b').append('c');
      const removedElement = list.delete('c');

      expect(removedElement.value).toBe('c');
      expect(list.head.value).toBe('a');
      expect(list.head.next.value).toBe('b');
      expect(list.tail.value).toBe('b');
      expect(list.tail.next).toBe(null);
    });
  });
});
