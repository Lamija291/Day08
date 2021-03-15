function convertToInt(str) {
    return parseInt(str);
}

var a = parseInt("44");

console.log(typeof parseInt(convertToInt("44")));
console.log(typeof parseInt(convertToInt("44")));
console.log(typeof parseInt(convertToInt("27")));
console.log(typeof parseInt(convertToInt("JeffBezos")));

module.exports = convertToInt;