function fact(n) {
    return n ? n * fact(n - 1) : 1;
}

function fact2(n) {
    return (n != 1) ? n * fact2(n - 1) : 1;
}

function fact3(n) {
    if (n > 1)
        n *= fact3(n - 1);
    return n;
}

console.log(fact(5));
console.log(fact2(5));
console.log(fact3(5));