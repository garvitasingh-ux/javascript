// unique-elements.js
// Return unique elements from two arrays

function getUniqueElements(arr1, arr2) {
    const combined = arr1.concat(arr2); // merge arrays
    const unique = [];

    for (let i = 0; i < combined.length; i++) {
        if (unique.indexOf(combined[i]) === -1) {
            unique.push(combined[i]);
        }
    }

    return unique;
}

// Example usage
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

console.log("Unique Elements:", getUniqueElements(array1, array2));