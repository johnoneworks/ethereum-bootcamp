const signMessage = require("./signMessage");
const recoverKey = require("./recoverKey");
const { assert } = require("chai");
const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

describe("Recover Key", () => {
    it("should return the correct public key", async () => {
        const signature = await signMessage("hello world");
        const publicKey = toHex(secp256k1.getPublicKey(PRIVATE_KEY));
        const recoveredKey = await recoverKey(signature, "hello world");

        assert.equal(recoveredKey, publicKey);
    });
});