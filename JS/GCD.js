function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let a = 48;
let b = 18;
let result = gcd(a, b);
console.log(`Наибольший общий делитель чисел ${a} и ${b} равен ${result}`);