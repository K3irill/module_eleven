import reverse  from "./reverse"

describe("tests for reverse function", () => {
  const string = "hello";
  const empty = "";
  const number = "123456789";

    it("should return 'olleh' ", () => {
    expect(reverse(string)).toBe("olleh");
    }),
    it("should return '987654321' ", () => {
      expect(reverse(number)).toBe("987654321");
    }),
    it("should return '' ", () => {
      expect(reverse(empty)).toBe("");
    });
});
