// p6.js
// Problem: Find character with max frequency, ignore whitespace & punctuation

function maxCharFrequency(str) {
    const map = {};
    const cleaned = str.replace(/[^a-zA-Z0-9\u00C0-\uFFFF]/g, '');

    for (let char of cleaned) {
        map[char] = (map[char] || 0) + 1;
    }

    let maxChar = '';
    let maxCount = 0;
    for (let key in map) {
        if (map[key] > maxCount) {
            maxChar = key;
            maxCount = map[key];
        }
    }

    return { character: maxChar, occurrence: maxCount };
}

/*
Time: O(n)
Space: O(k) where k is number of unique characters
*/

console.log(maxCharFrequency("Hello World!"))

