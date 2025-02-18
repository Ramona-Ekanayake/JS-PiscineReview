function reverse(input) {
    let result;

    if (Array.isArray(input)) {
        result = [];
        for (let i = input.length - 1; i >= 0; i--) {
            result.push(input[i]);
        }
    } else if (typeof input === 'string') {
        result = '';
        for (let i = input.length - 1; i >= 0; i--) {
            result += input[i];
        }
    } else {
        throw new Error('Input must be an array or a string');
    }

    return result;
}
