const { assert } = require('chai');
const { addTransaction, mempool } = require('./index');

describe("addTransaction", () => {
    it("should add a transaction to the mempool", () => {
        const transaction = { to: "bob", sender: "alice" };
        addTransaction(transaction);
        assert.equal(mempool.length, 1);
        assert.equal(mempool[0], transaction);
    });
});