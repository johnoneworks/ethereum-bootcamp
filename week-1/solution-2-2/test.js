const signMessage = require("./signMessage");
const hashMessage = require("./hashMessage");
const { assert } = require("chai");
const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

describe("Sign Message", () => {
    it("should return both a signature and a recovery bit", async () => {
        const response = await signMessage("hello world");

        const errorMessage = "expected signMessage to return an object with a signature and a recovery bit";
        assert(response.length, errorMessage);
        assert(response.length === 2, errorMessage);

        const [signature, recoveryBit] = response;
        assert(signature.length, "expected signature to be a Uint8Array");
        assert(typeof recoveryBit === "number", "expected recoveryBit to be a number");
    });

    it("should have been signed by the same private key", async () => {
        const [signature, recoveryBit] = await signMessage("hello world");
        const messageHash = hashMessage("hello world");
        const recoveredPublicKey = await secp256k1.recoverPublicKey(signature, messageHash, recoveryBit);

        const publicKey = await secp256k1.getPublicKey(PRIVATE_KEY);
        assert.equal(toHex(recoveredPublicKey), toHex(publicKey));
    });    
});