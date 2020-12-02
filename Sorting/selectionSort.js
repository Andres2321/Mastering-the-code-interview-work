// Pseudocode
    // Iterate through array with 2 for loops
    // compare both values to each other
    // Will eventually find smallest number 
// Time complexity - O(n^2)
// Space complexity - O(1)

function selectionSort(array){
    const length = array.length;
    for (let i = 0; i < array.length; i++) {
        let min = [i]
        let temp = array[i]
        for (let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]){
                min = j
            }
        }
        array[i] = array[min]
        array[min] = temp
    }
    return array
}