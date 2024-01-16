const SHA256 = require('crypto-js/sha256');

class Block {
    toHash() {
        const hash = SHA256("anything is okay");
        return hash.toString();
    }
}

module.exports = Block;