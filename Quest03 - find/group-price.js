function groupPrice(str) {
    const pricePattern = /([A-Z]{3}|\$)(\d+)(?:\.(\d{2}))?/g;
    let matches = [...str.matchAll(pricePattern)];
    let result = [];

    for (let match of matches) {
        let [fullMatch, currency, integerPart, decimalPart] = match;
        decimalPart = decimalPart || "00";
        result.push([fullMatch, integerPart, decimalPart]);
    }

    return result;
}
