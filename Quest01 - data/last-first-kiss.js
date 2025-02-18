function first (arrayArg){
    return arrayArg[0];
}
function last (arrayArg) {
    return arrayArg[arrayArg.length - 1];
}

function kiss (arg){
    return [last(arg), first(arg)];
}
