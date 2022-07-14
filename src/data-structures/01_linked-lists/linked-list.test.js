const LinkedList = require('./linked-list');
const assert = require('assert');

const initializeList = () => {
  const list = new LinkedList();
  list.append('a').append('b').append('c').append('d');

  return list;
};

const listAppend = initializeList();
const currentAppend = listAppend.append('x').toString();
const expectedAppend = 'a,b,c,d,x';
assert.equal(
  currentAppend,
  expectedAppend,
  `Expected result: ${expectedAppend} is not equal to current result: ${currentAppend}`
);

const listPrepend = initializeList();
const currentPrepend = listPrepend.prepend('x').toString();
const expectedPrepend = 'x,a,b,c,d';
assert.equal(
  currentPrepend,
  expectedPrepend,
  `Expected result: ${expectedPrepend} is not equal to current result: ${currentPrepend}`
);
