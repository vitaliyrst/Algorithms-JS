function insertSort(items) {
    let length = items.length;

    for (let i = 1; i < length; i++) {
        let temp = items[i];
        let j = i - 1;

        while (items[j] > temp) {
            items[j + 1] = items[j];
            j--;
        }
        items[j + 1] = temp;
    }
    return items;
}

let numbersInsert = [4, 2, 6, 9, 1, 0, 15, 5, 7, 3];
console.log('sort_insert|', insertSort(numbersInsert));