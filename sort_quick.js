function quickSort(items) {
    let length = items.length;
    if (length === 0) {
        return items;
    }

    let referencePoint = items[0];
    let leftArray = [];
    let rightArray = [];

    for (let i = 1; i < length; i++) {
        if (items[i] <= referencePoint) {
            leftArray.push(items[i])
        } else {
            rightArray.push(items[i]);
        }
    }

    return quickSort(leftArray).concat(referencePoint, quickSort(rightArray));
}

let numbersQuick = [4, 2, 6, 9, 1, 0, 15, 5, 7, 3];
console.log('sort_quick|', quickSort(numbersQuick));