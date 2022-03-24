function expect(value) {
  return {
    toBe: (expectation) => {
      if (value === expectation) {
        console.log("Success");
      } else {
        console.log(`Value is ${value}, but expectation is ${expectation}`);
      }
    },
  };
}

const sum = (a, b) => a + b;

const nativeNull = () => null;

module.exports = { sum, nativeNull };

// expect(sum(41, 1)).toBe(42);
