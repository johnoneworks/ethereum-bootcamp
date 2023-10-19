const signMessage = require("./signMessage");
const hashMessage = require("./hashMessage");
const { assert } = require("chai");
const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

describe("Sign Message", () => {
    it("should return a valid signature", async () => {
        const signature = await signMessage("hello world");
        const publicKey = toHex(secp256k1.getPublicKey(PRIVATE_KEY));
        const publicKeyMatches = await secp256k1.verify(signature, hashMessage("hello world"), publicKey);

        assert.equal(publicKeyMatches, true);
    });
});