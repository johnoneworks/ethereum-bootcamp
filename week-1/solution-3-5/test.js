const { assert } = require('chai');
const { mine, blocks, mempool, addTransaction, TARGET_DIFFICULTY } = require('./index');
const SHA256 = require('crypto-js/sha256');

describe("mine", () => {
    describe("with 5 mempool transactions", () => {
        before(() => {
            for (let i = 0; i < 5; i++) {
                addTransaction({ sender: "Venesa", to: "John" });
            }
        });
        describe("after mining", () => {
            before(() => {
                mine();
            });
            it("should have 1 block", () => {
                assert.equal(blocks.length, 1);
            });
            it("should have 5 transactions in the block", () => {
                assert.equal(blocks[0].transactions.length, 5);
            });
            it("should have 0 transactions in the mempool", () => {
                assert.equal(mempool.length, 0);
            });
            it("should have a nonce", () => {
                assert.isDefined(blocks[0].nonce, "did not find a nonce");
            });
            it("should have a hash lower than the target difficulty", () => {
                const actualHash = blocks[0].hash.toString();
                const isLessThanTarget = BigInt(`0x${actualHash}`) < TARGET_DIFFICULTY;
                assert.isTrue(isLessThanTarget, `expected ${actualHash} to be less than ${TARGET_DIFFICULTY}`);
            });
        });
    });

    describe("with 15 mempool transactions", () => {
        before(() => {
            for (let i = 0; i < 15; i++) {
                addTransaction({ sender: "Venesa", to: "John" });
            }
        });
        describe("after mining", () => {
            before(() => {
                mine();
            });
            it("should have 2 blocks", () => {
                assert.equal(blocks.length, 2);
            });
            it("should have 10 transactions in the first block", () => {
                assert.equal(blocks[blocks.length - 1].transactions.length, 10);
            });
            it("should store ten transactions on the block", () => {
                assert.equal(blocks[blocks.length - 1].transactions.length, 10);
            });
            it("should have 5 transactions in the mempool", () => {
                assert.equal(mempool.length, 5);
            });
            it("should have a nonce", () => {
                assert.isDefined(blocks[blocks.length - 1].nonce, "did not find a nonce");
            });
            it("should have a hash lower than the target difficulty", () => {
                const actualHash = blocks[blocks.length - 1].hash.toString();
                const isLessThanTarget = BigInt(`0x${actualHash}`) < TARGET_DIFFICULTY;
                assert.isTrue(isLessThanTarget, `expected ${actualHash} to be less than ${TARGET_DIFFICULTY}`);
            });
            describe("after mining again", () => {
                before(() => {
                    mine();
                });
                it("should have 3 blocks", () => {
                    assert.equal(blocks.length, 3);
                });
                it("should store five transactions on the last block", () => {
                    assert.equal(blocks[blocks.length - 1].transactions.length, 5);
                });
                it("should have 0 transactions in the mempool", () => {
                    assert.equal(mempool.length, 0);
                });
                it("should have a nonce", () => {
                    assert.isDefined(blocks[blocks.length - 1].nonce, "did not find a nonce");
                });
                it("should have a hash lower than the target difficulty", () => {
                    const actualHash = blocks[blocks.length - 1].hash.toString();
                    const isLessThanTarget = BigInt(`0x${actualHash}`) < TARGET_DIFFICULTY;
                    assert.isTrue(isLessThanTarget, `expected ${actualHash} to be less than ${TARGET_DIFFICULTY}`);
                });
            });
        });
    });
});