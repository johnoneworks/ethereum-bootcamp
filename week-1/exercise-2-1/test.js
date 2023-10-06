const hashMessage = require("./hashMessage");
const { assert } = require("chai");
const { toHex } = require("ethereum-cryptography/utils");

const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";
const EXPECTED_ADDRESS = "04828bd01f5b6107151bae2060e79c7841c8c93f";

describe("Get Address", () => {
    it("should get the address from a public key", async () => {
        const publicKey = secp256k1.getPublicKey(PRIVATE_KEY);

        const address = toHex(getAddress(publicKey));

        assert.equal(address.toLocaleLowerCase(), EXPECTED_ADDRESS.toLocaleLowerCase());
    });
});