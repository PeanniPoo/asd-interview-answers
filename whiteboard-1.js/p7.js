// p7.js
// Problem: Find square root of a perfect square using binary search

function squareRoot(x) {
    if (x < 2) return x;

    let low = 1;
    let high = x;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = mid * mid;

        if (guess === x) return mid;
        else if (guess < x) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // x was not a perfect square
}

/*
Time: O(log x)
Space: O(1)
*/

console.log(squareRoot(4)); // 2
console.log(squareRoot(9)); // 3
console.log(squareRoot(25)); // 5
console.log(squareRoot(2)); // -1 (not a perfect square)

