const { sum, nativeNull } = require("./intro");

describe("Sum function: ", () => {
  test("Should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
  });

  test("Should return value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
  });

  test("Should sum to float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // throw out mantisse error
  });
});

describe("Native null function: ", () => {
  test("Should return falsy value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // undefined, null, 0, '', NaN
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
