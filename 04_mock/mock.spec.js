const { map } = require("./mock");

describe("Map function", () => {
  let array;
  let fn;

  beforeEach(() => {
    array = [1, 2, 3, 5];
    fn = jest.fn((x) => x ** 2); // define pseudo function
    map(array, fn);
  });

  test("Should call callback", () => {
    expect(fn).toBeCalled(); // if the function was called
  });

  test("Should call callback 4 times", () => {
    expect(fn).toBeCalledTimes(4); // 4 times call fn
    expect(fn.mock.calls.length).toBe(4); // -||-
  });

  test("Should pow 2 each element", () => {
    array.forEach((val, i) => {
      expect(fn.mock.results[i].value).toBe(val ** 2);
    });
  });

  test("Should fn work", () => {
    fn.mockReturnValueOnce(100).mockReturnValueOnce(200).mockReturnValue("42");
    expect(fn()).toBe(100);
    expect(fn()).toBe(200);
    expect(fn()).toEqual("42");
    expect(fn()).toBe("42");
  });
});
