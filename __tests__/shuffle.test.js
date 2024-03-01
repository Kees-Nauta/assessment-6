const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('returns an array', () => {
    const result = shuffle([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
  });

  test('returns a shuffled array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const result = shuffle(originalArray);

    expect(result).not.toEqual(originalArray);

    expect(result.sort()).toEqual(originalArray.sort());
  });
});