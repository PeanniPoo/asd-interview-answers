// p2.js
// Problem: FizzBuzz from 1 to 100 with specific rules

function fizzBuzz(n = 100) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(i);
    }
    return result;
}

console.log(fizzBuzz().join(', '));

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
