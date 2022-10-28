import _ from 'lodash';

let object;
let copy = {};

beforeEach(() => {
  object = { a: [{ b: { c: 3 } }] };
  copy = Object.assign(copy, object);
});

test('testing set function', () => {
  copy.a[0].b.c = 4;
  _.set(object, 'a[0].b.c', 4);
  expect(object).toEqual(copy);
});

test('flat test', () => {
  copy.a = {};
  _.set(object, ['a'], {});
  expect(object).toEqual(copy);
});

test('set new property', () => {
  copy.d = 5;
  _.set(object, 'd', 5);
  expect(object).toEqual(copy);
});