const { Queue } = require('./queue');

describe('Queue', () => {
  let queue = null;

  beforeEach(() => {
    queue = new Queue();
  });

  it('isEmpty', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.add('a');
    expect(queue.isEmpty()).toBe(false);
  });

  it('add', () => {
    queue.add('a').add('b').add('c');
    const queueArray = queue.toArray();

    expect(queueArray.length).toBe(3);
    expect(queueArray[0].value).toBe('a');
    expect(queueArray[1].value).toBe('b');
    expect(queueArray[2].value).toBe('c');
  });

  it('remove', () => {
    queue.add('a').add('b').add('c');
    queue.remove();
    const queueArray = queue.toArray();

    expect(queueArray.length).toBe(2);
    expect(queueArray[0].value).toBe('b');
    expect(queueArray[1].value).toBe('c');
  });
});
