const numbers = [99,44,6,2,1,5,63,87,283,4,0]

function bubbleSort (array) {
    const length = array.length

    for (let i = 0; i < length; i++) {
        // console.log(i)
        for (let j = 0; j < length; j++) {
            console.log(i, j)
            if(array[j] > array[j+1]){
                // Swap numbers
                let temp = array[j]
                // console.log(temp)
                array[j] = array[j+1]
                // console.log('Temporary number', temp, 'Current index',array[j])
                array[j+1] = temp
            }
        }
    }
}
bubbleSort(numbers)
// console.log(numbers)


// Summary
    // Double for loop to compare indexes values.
    // Larger value gets displaced index++ until they bubble to the end of the array.
    // TIME COMPLEXITY - O(N^2)
    // SPACE COMPLEXITY - O(1)