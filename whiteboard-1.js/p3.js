// p3.js
// Problem: Generate n Fibonacci numbers recursively

function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const seq = fibonacci(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
}

console.log(fibonacci(10));

/*
Time Complexity: O(2^n) for naive recursion
Space Complexity: O(n) due to recursion stack

Bonus: Use memoization or iterative version to avoid stack overflow for large `n`
*/
