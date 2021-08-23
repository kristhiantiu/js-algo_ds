const typedOutStrings = require('./typed-out-strings');

test(`'ac', 'ac' === ''`, () => {
  expect(typedOutStrings('ac', 'ac')).toBe(true);
});

test(`'az#c', 'ac#c' === ''`, () => {
  expect(typedOutStrings('az#c', 'ac#c')).toBe(true);
});

test(`'ab##c', 'c' === ''`, () => {
  expect(typedOutStrings('ab##c', 'c')).toBe(true);
});

test(`'a###b', 'b' === ''`, () => {
  expect(typedOutStrings('a###b', 'b')).toBe(true);
});