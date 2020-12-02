// Divide and conquer algo
// Divides input array in two halves. calls itself for the two halves and then merges the two sorted halves
// The merge function is used to unite the two halves.
// STABLE = A sorting algorithm is said to be stable of two objects with equal keys appear in the same order in sorted 
// output as they appear in the input unsorted array. A stable sort is one in which preserves the original order of the 
// input set, where the unstable algorithm does not distinguish between two or more items.


// Time complexity - O(nlog(n))
    // Time complexity is always )(nlog(n)) as merge sort always divides the array into two halves and takes linear time
    // to merge two halves
// Space complexity - O(n)

function mergeSort(array){
    if (array.length === 1){
        return array
    }

    const length = array.length
    const middle = Math.floor(length / 2)
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right){
    const result = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
const numbers = [99,44,6,2,1,5,63,87,283,4,0]
const answer = mergeSort(numbers)
console.log(answer)