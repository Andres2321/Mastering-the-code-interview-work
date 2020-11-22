// return the element within an array that appears the most times out of all elements.


// Pseudocode (my thoughts)
    // create an empty object, which will hold keys being the number and value being the frequency
    // create a variable that will hold the most frequent value
    // iterate through the array
    // if the element is new create a key space in the object pointer
    // if the element is repeated increase the value or count
    // compare the object values and find max
    // push max value key into result pointer 
    // return result pointer

const frequency = (array) => {
    let valueFrequency = {}
    let result;

    for(let number of array){
        if(valueFrequency.key !== number) valueFrequency[number] = 1
        if(valueFrequency.key == number) valueFrequency[number].value++
}

    console.log(valueFrequency)
    // return result
}

const array = [2,5,1,2,3,5,1,2,4]
console.log(frequency(array))

// 1st solution not optimized

function firstRecurringCharacter(input){
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) input[i]
        }
    }
    return undefined
}

firstRecurringCharacter(array)


// 2nd optimized result with hash function

function firstRecurringCharacter2(input) {
    // will not let duplicates in object
    let map = {}
    for (let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined){ 
            input[i]    
        } else {
            map[input[i]]
        }    
    }
    return undefined
} //O(n)


firstRecurringCharacter2(array)
