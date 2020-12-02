// Useful for times list is sorted or almost sorted
// Best case scenario of O(n) when list is sorted or almost sorted\

// Time complexity - If nearly sorted, it is very fast BASE CASE O(n) WORST CASE O(n^2)
// Space comlexity - O(1)

function insertionSort(array){
    const length = array.length
    for (let i = 0; i < length; i++) {
        if(array[i] < array[0]) {
        array.unshift(array.splice(i,1)[0])
        } else {
            for (let j = 1; j < i; j++) {
                if(array[i] >= array[j-1] && array[i] < array[j]){
                    array.splice(j,0,array.splice(i,1)[0])
                }
            }
        }
    }
}
const array = [99,44,6,2,1,5,63,87,283,4,0]
insertionSort(array)
console.log(array)