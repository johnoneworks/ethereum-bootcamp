const { secp256k1 } = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

// 記得在 production 不要用這個金鑰
const PRIVATE_KEY = "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e";

async function signMessage(message) {
    // 這個 function 就交給妳實作囉
}

module.exports = signMessage;