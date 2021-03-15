var sum = 0;

function addThree() {
    sum = sum + 3;
}
addThree();

function addFive() {
    sum = sum + 5;
}
addFive();

module.exports = {
    addThree,
    addFive

};
console.log(sum);


