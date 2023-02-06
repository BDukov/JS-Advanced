const { expect } = require("chai");
//const { it } = require('mocha');
const isOddOrEven = require("../test.js");

describe("isOddOrEven", () => {
  it("isString", () => {
    expect(isOddOrEven(3)).to.undefined;
  });
  it("isOdd", () => {
    expect(isOddOrEven("s")).to.equal("odd");
  });
  it("isEven", () => {
    expect(isOddOrEven("aa")).to.equal("even");
  });
});
