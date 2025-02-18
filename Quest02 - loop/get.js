function get(src, path) {
    const keys = path.split('.'); // Split path into array of keys
    let value = src;              // Start from the src object

    for (let key of keys) {
        if (value[key] === undefined) {
            return undefined;          // Return undefined if path is invalid
        }
        value = value[key];          // Move deeper into the object
    }

    return value;
}

const src = { nested: { key: 'peekaboo' } };
const path = 'nested.key';
console.log(get(src, path));