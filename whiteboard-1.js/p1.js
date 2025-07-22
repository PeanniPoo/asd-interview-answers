// p1.js
// Problem: Sort a list of numbers in ascending order without using built-in sort functions.
// Approach: Implement basic selection sort algorithm

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

// Example input
const input = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];
console.log(selectionSort(input));

/*
Time Complexity: O(n^2)
Space Complexity: O(1)
*/
