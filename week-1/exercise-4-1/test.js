const Block = require("./Block");
const assert = require("assert");

describe("Block", () => {
    const newBlock = new Block();

    it ("the toHash method should return a valid SHA256 hash", () => {
        assert(/^[0-9A-F]{64}$/i.test(newBlock.toHash()));
    });
});