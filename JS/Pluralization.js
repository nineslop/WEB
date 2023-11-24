function pluralizeRecords(n) {
    if (n < 0) {
        return "Число должно быть неотрицательным.";
    }

    let lastDigit = n % 10;
    let lastTwoDigits = n % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return `В результате выполнения запроса было найдено ${n} записей`;
    } else if (lastDigit === 1) {
        return `В результате выполнения запроса была найдена ${n} запись`;
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return `В результате выполнения запроса было найдено ${n} записи`;
    } else {
        return `В результате выполнения запроса было найдено ${n} записей`;
    }
}

let count = 1;
let result = pluralizeRecords(count);
console.log(result);
