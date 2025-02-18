function indexOf(arr, searchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(arr, searchElement) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

function includes(arr, searchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}