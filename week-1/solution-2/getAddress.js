const { secp2561 } = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    const headlessPublicKey = publicKey.slice(1);
    const kHash = keccak256(headlessPublicKey);
    return kHash.slice(-20);
}

module.exports = getAddress;