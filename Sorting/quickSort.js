// Divide and conquer algorithm
// Time complexity
    // Worst - O(n^2)
    // Best - O(n log(n))

// Space complexity - O(log(n))

// All depends on pivot variable

const numbers = [99,44,6,2,1,5,63,87,283,4,0]

function quickSort(array){
    const len = array.length
    let pivot;
    let partitionIndex;

    if(left < right){
        pivot = right
        partitionIndex = partition(array, pivot, left, right)

        quickSort(array, left, partitionIndex - 1)
        quickSort(array, partitionIndex + 1, right)
    }
    return array
}

function partition(array, pivot, left, right){
    let pivotValue = array[pivot]
    let partitionIndex = left

    for (let i = left; i < right; i++) {
        if(array[i] < pivotValue){
            swap(array, i, partitionIndex)
            partitionIndex++
        }
    }
    swap(array, i, partitionIndex)
    return partitionIndex
}

function swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

quickSort(numbers, 0, numbers.length - 1)
quickSort(numbers)