function selectSort(items) {
    let length = items.length;

    for (let i = 0; i < length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < length; j++) {

            if (items[j] < items[min]) {
                min = j;
            }

            let temp = items[min];
            items[min] = items[i];
            items[i] = temp;
        }
    }
    return items;
}

let numbersSelect = [4, 2, 6, 9, 1, 0, 15, 5, 7, 3];
console.log('sort_select|', selectSort(numbersSelect));