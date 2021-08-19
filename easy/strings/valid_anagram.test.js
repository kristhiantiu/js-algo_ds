const validAnagram = require('./valid_anagrams');

test(`'' === ''`, () => {
  expect(validAnagram('', '')).toBe(true);
});

test(`'aaz' and 'zza' is false`, () => {
  expect(validAnagram('aaz', 'zza')).toBe(false);
});

test(`'anagram' and 'nagaram' is true`, () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true);
});

test(`'rat' and 'car' is false`, () => {
  expect(validAnagram('rat', 'car')).toBe(false);
});

test(`'awesome' and 'awesom' is false`, () => {
  expect(validAnagram('awesome', 'awesom')).toBe(false);
});

test(`'qwerty' and 'qeywrt' is true`, () => {
  expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
});

test(`'texttwisttime' and 'timetwisttext' is true`, () => {
  expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
});