function pow(x, n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = 8;
let n = 3;
let result = pow(x, n);
console.log(`${x} в степени ${n} равно ${result}`);
