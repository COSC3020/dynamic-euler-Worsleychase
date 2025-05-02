function e(n) {
    if(n === 0) return 1;

    let eVals = new Array(n+1).fill(0);
    let factorial = 1;

    eVals[0] = 1;

    for (let i =1; i <= n; i++) {
        factorial *=i; // this is the key, keeping track of factorials instead of recalculating
        eVals[i] = eVals[i-1] + (1.0/factorial);
    }
    return eVals[n]
}
