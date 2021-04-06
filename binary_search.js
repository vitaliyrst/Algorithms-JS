/**
 * @description Ищет число бинарным поиском в массиве и возвращает его позицию.
 * Время выполнения O(lonN)
 * @param {number[]} items - Отсортированный массив
 * @param {number} searched - Искомое значение
 * @returns {number|null} Позиция найденного значения в массиве или null, если значение не найдено
 */
function binarySearch(items, searched) {
    let first = 0;
    let last = items.length - 1;

    while (first <= last) {
        let middle = (first + last) / 2;
        middle = Math.floor(middle);

        const guess = items[middle];

        if (guess === searched) {
            return middle;
        }
        if (guess > searched) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return null;
}

let binarySearchResult = binarySearch([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 30);
console.log(binarySearchResult);