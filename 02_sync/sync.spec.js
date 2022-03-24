const Lodash = require("./sync");

let _ = new Lodash();

describe("Lodash: compact", () => {
  let array;

  beforeEach(() => {
    array = [false, 42, 0, "Es6", "", NaN, undefined];
  }); // before each test

  afterAll(() => {
    const _ = new Lodash(); // just for fun
  }); // after all tests

  test("Should be defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("Should remove falsy values from array", () => {
    console.log(array);
    expect(_.compact(array)).toEqual([42, "Es6"]);
  });

  test("Shoukld NOT contain falsy values", () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(null);
  });
});

describe("Lodash: groupBy", () => {
  test("Should be defined", () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  test("Should group array items by Math.floor", () => {
    const array = [2.2, 2.4, 4.2, 3.1];
    const result = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1],
    };
    expect(_.groupBy(array, Math.floor)).toEqual(result);
  });

  test("Should group array items by length", () => {
    const array = ["one", "two", "three"];
    const result = {
      5: ["three"],
      3: ["one", "two"],
    };
    expect(_.groupBy(array, "length")).toEqual(result);
  });

  test("Should NOT return array", () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
  });
});
