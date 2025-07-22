// p4.js
// Problem: Find intersection of two arrays without using Set or built-ins

function findIntersection(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
                result.push(arr1[i]);
                break;
            }
        }
    }
    return result;
}

console.log(findIntersection([4, 5, 2, 3, 1, 6], [8, 7, 6, 9, 4, 5]));

