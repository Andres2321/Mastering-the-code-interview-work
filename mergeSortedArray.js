// Merge two sorted array

// Pseudocode
    // create a variable that is going to hold the combination of the two arrays
    // Iterate through the first array and push all values to result variable
    // Iterate through 2nd array and push all values to result variable
    // return result variable


function mergeSortedArrays(array1, array2){
    let result = []
    for(let values in array1) result.push(array1[values])
    for(let values in array2) result.push(array2[values])
    return result
}

function mergeSortedArrays2(array1, array2) {
    return array1.concat(array2)
}


console.log(mergeSortedArrays2([0,3,4,31], [4,6,30])) 