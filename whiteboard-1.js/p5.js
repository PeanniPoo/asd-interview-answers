// p5.js
// Problem: Return elements in one list or the other, but not both

function symmetricDifference(a, b) {
    const result = [];

    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i]) && !result.includes(a[i])) result.push(a[i]);
    }
    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i]) && !result.includes(b[i])) result.push(b[i]);
    }

    return result;
}

/*
Time: O(n*m)
Space: O(n)
*/

console.log(symmetricDifference([4, 5, 2, 3, 1, 6], [8, 7, 6, 9, 4, 5]));
