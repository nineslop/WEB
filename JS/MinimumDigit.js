function minDigit(x) {
    if (x < 0) {
        return "Число должно быть неотрицательным.";
    }

    if (x === 0) {
        return 0;
    }

    let min = 9;
    while (x > 0) {
        let digit = x % 10;
        if (digit < min) {
            min = digit;
        }
        x = (x - digit) / 10;
    }

    return min;
}


let number = 200;
let result = minDigit(number);
console.log(`Наименьшая цифра в числе ${number} равна ${result}`);
