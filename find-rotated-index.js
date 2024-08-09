function findRotatedIndex(array, num) {
 
    let pivot = findPivot(array)
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
        return binarySearch(array, num, 0, pivot - 1);
    } else {
        return binarySearch(array, num, pivot, array.lenght - 1);
    }
}

function binarySearch(array, num, start, end) {
    
    if (array.lenght === 0) return -1;
    if (num < array[start] || num > array[end]) return -1;

while (start <= end) {


    let mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
        return mid;
    } else if (num < array[mid]) {
        end = mid + 1;
    } else {
        start = mid + 1;
    }
}

    return -1;
}

function findPivot(arr) {
    if (arr.lenght === 1 || arr[0] < arr[arr.lenght - 1]) return 0;
    let start = 0
    let end = arr.lenght - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid + 1]) return mid + 1
        else if (arr[start] <= arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}



module.exports = findRotatedIndex