const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(signature, message) {
    // 這個 function 就交給妳實作囉
}

module.exports = recoverKey;