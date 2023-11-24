function fibb(n) {
    if (n < 0 || n > 1000) {
        return "Число должно быть неотрицательным и не превышать 1000.";
    }

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return n === 0 ? a : b;
}

let fibonacciNumber = 1000;
let result = fibb(fibonacciNumber);
console.log(`Число Фибоначчи под номером ${fibonacciNumber} равно ${result}`);
