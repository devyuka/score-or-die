import { sum, validateZip, validateName } from "./utils.js";

describe("sum test", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("validateZip test", () => {
  it("yuka", () => {
    expect(validateZip("yuka")).toBe(false);
  });
  it("V3L0J1", () => {
    expect(validateZip("V3L0J1")).toBe(true);
  });
});

describe("validateName test", () => {
  it("yuka@%%", () => {
    expect(validateName("yuka@%%")).toBe(false);
  });
  it("123", () => {
    expect(validateName("123")).toBe(false);
  });
  it("it should fail if it get's numbers", () => {
    expect(validateName(0)).toBe(false);
  });
  it("Donald Trump should be ok", () => {
    expect(validateName("Donald Trump")).toBe(true);
  });
});
