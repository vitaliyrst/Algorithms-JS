function map(arr, mapCallback) {
    // проверяем переданные параметры
    if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
        return [];
    } else {
        let result = [];
        // мы создаем массив с результатами при каждом вызове функции
        // поскольку мы не хотим менять оригинальный массив
        for (let i = 0, len = arr.length; i < len; i++) {
            result.push(mapCallback(arr[i], i, arr));
            // помещаем результаты mapCallback в result
        }
        return result;
    }
}

let mapNumbers = [2, 3, 5, 7];
let mapped = map(mapNumbers, (num) => {
    return num * 2;
});

console.log('map|', mapped);