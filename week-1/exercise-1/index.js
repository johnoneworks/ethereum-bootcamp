const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// hash 值有可能代表的顏色
const COLORS = ["red", "green", "blue", "yellow", "pink", "orange"];

// 給定一個 hash(uint8 array), 回傳產生此 hash 的顏色
function findColor(hash) {
    // function 內容就靠妳了
}

module.exports = findColor;