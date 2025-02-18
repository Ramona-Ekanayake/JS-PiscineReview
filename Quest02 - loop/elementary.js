function multiply(a, b) {
    let result = 0;
    let negative = false;

    if (a < 0) {
        a = -a;
        negative = !negative;
    }
    if (b < 0) {
        b = -b;
        negative = !negative;
    }

    for (let i = 0; i < b; i++) {
        result += a;
    }

    return negative ? -result : result
}

function divide(a, b) {
    let result = 0;
    let negative = false;

    if (a < 0) {
        a = -a;
        negative = !negative;
    }
    if (b < 0) {
        b = -b;
        negative = !negative;
    }

    while (a >= b) {
        a -= b;
        result++;
    }

    return negative ? -result : result
}

function modulo(a, b) {
    let negative = false;

    if (a < 0) {
        a = -a;
        negative = !negative;
    }

    if (b < 0) {
        b = -b;
    }

    while (a >= b) {
        a -= b;
    }

    return negative ? -a : a;

}
