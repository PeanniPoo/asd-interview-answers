// p8.js
// Problem: Check if two strings are anagrams (ignoring case, spaces, punctuation)

function cleanString(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9\u00C0-\uFFFF]/g, '')
        .split('')
        .sort()
        .join('');
}

function isAnagram(a, b) {
    return cleanString(a) === cleanString(b);
}

/*
Time: O(n log n) due to sort
Space: O(n)
*/

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("debit card", "Bad credit")); // true
console.log(isAnagram("hello", "bye")); // false
console.log(isAnagram("restful", "fluster")); // true
console.log(isAnagram("listen", "silentt")); // false
console.log(isAnagram("Conversation", "Voices, rant on")); // true

