const { assert } = require('chai');
const { mine, blocks } = require('./index');

describe("mine", () => {
    describe("first block", () => {
        let hash;
        before(() => {
            hash = mine();
        });
        it("should add a block to the blocks array", () => {
            assert.equal(blocks.length, 1);
        });
        it("should store the expected id", () => {
            const lastBlock = blocks[blocks.length - 1];
            assert(lastBlock.id != null, "did not find id property");
            assert.equal(lastBlock.id, 0);
        });
    });

    describe("second block", () => {
        let hash;
        before(() => {
            hash = mine();
        });
        it("should add a block to the blocks array", () => {
            assert.equal(blocks.length, 2);
        });
        it("should store the expected id", () => {
            const lastBlock = blocks[blocks.length - 1];
            assert(lastBlock.id != null, "did not find id property");
            assert.equal(lastBlock.id, 1);
        });
    });
});