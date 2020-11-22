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
    return result.sort((a,b) => a - b)
}

function mergeSortedArrays2(array1, array2) {
    return array1.concat(array2).sort((a,b) => a - b)
}


// console.log(mergeSortedArrays2([0,3,4,31], [4,6,30])) 
// console.log(mergeSortedArrays([0,3,4,31], [4,6,30])) 



// Merge the sorted aray into one sorted array

// Pseudocode
    // declare a starting point for both arrays
    // declare result variable that we will return at the end of the function
    // while arrays have enough length
    // compare both values against each other
    // lower value will push to result
    // increase the index to next value
    // compare values again until no more length is available in parameters

    const mergeSortedArrays3 = (arr1, arr2) => {
        const result = []
        let i = 0
        let j = 0

        while(arr1 || arr2){
            let arr1Start = arr1[i]
            let arr2Start = arr2[j]

            if( !arr2Start || arr1Start < arr2Start){
                result.push(arr1Start)
                i++
            } else {
                result.push(arr2Start)
                j++
            }
        }
        return result
    }

    // console.log(mergeSortedArrays3([0,3,4,31], [4,6,30]))


