const Ajax = require("./async");
const axios = require("axios");

jest.mock("axios");

describe("Ajax: echo", () => {
  test("Should return value async", async () => {
    const result = await Ajax.echo("Some data");
    expect(result).toBe("Some data");
  });

  test("Should return value with promise", () => {
    return Ajax.echo("Some data").then((data) => {
      expect(data).toBe("Some data");
    });
  });

  test("Should catch error async", async () => {
    try {
      await Ajax.echo();
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe("error");
    }
  });

  test("Should catch erryr with promise", () => {
    return Ajax.echo().catch((err) => {
      expect(err).toBeInstanceOf(Error);
    });
  });
});

describe("Ajax: GET", () => {
  let response;
  let todos;

  beforeEach(() => {
    todos = [{ id: 1, title: "Todo 1", complete: false }];

    response = {
      data: {
        todos,
      },
    };
  });

  test("Should return data from backend", () => {
    axios.get.mockReturnValue(response);

    return Ajax.get().then((data) => {
      expect(data.todos).toEqual(todos);
    });
  });
});
