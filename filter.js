function filter(arr, filterCallback) {
    // проверяем передаваемые параметры
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
        return [];
    } else {
        let result = [];
        // ...
        for (let i = 0, len = arr.length; i < len; i++) {
            // определяем соответствие возвращаемого результата заданному условию
            if (filterCallback(arr[i], i, arr)) {
                // помещаем значение, прошедшее фильтр, в result
                result.push(arr[i]);
            }
        }
        return result;
    }
}

let filterNumbers = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];
let filtered = filter(filterNumbers, (num) => {
    if (num <= 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
});

console.log('filter|', filtered);