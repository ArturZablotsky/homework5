function findGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const a = Number;
const b = Number;
console.log(findGCD( a, b ))