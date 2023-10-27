const hashMessage = require("./hashMessage");

async function recoverKey(signature, message) {
    const messageHash = hashMessage(message);
    const publicKey = signature.recoverPublicKey(messageHash);
    return publicKey.toHex();
}

module.exports = recoverKey;