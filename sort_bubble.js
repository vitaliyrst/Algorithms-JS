function bubbleSort(items) {
    let length = items.length - 1;

    for (let i = 0; i < length; i++) { // Выполняется для каждого элемента массива, кроме последнего.

        for (let j = 0; j < length - i; j++) { // Для всех последующих за текущим элементов

            if (items[j + 1] < items[j]) { // выполняется проверка, и если следующий элемент меньше текущего
                let temp = items[j + 1];
                items[j + 1] = items[j];
                items[j] = temp; // то эти элементы меняются местами.
            }
        }
    }
    return items;
}

let numbersBubble = [4, 2, 6, 9, 1, 0, 15, 5, 7, 3];
console.log('sort_bubble|', bubbleSort(numbersBubble));












