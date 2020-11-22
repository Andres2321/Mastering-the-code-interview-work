// ~~~~~ Array ~~~~~

// Pros
    // Fast lookups
    // Fast push/pop
    // Ordered
// Cons
    // Slow inserts
    // Slow deletes
    // Fixed size(if using static array)

// PUSH
    // Adds a variable to the end of an array
    // Time complexity = O(1)
// POP
    // Remove the last item or index in the array   
    // Time complexity = O(1)
// UNSHIFT
    // Adds a variable at the beginning of the array
    // Time complexity = O(n)
    // IMPORTANT - Adding an element to the biginning of the array will shift all indexes to the right
    // algoright has to loop through the array and re-categorize all new indexes
// SPLICE
    // Add an element anywhere in the array indicated by an index
    // Time complexity = O(n)

// STATIC ARRAY
    // Fixed in size

// DYNAMIC ARRAY
    // It usualle doubles space as it creates a new array to mutate

// REFERENCE TYPE
    // Non-primitive type
    let object1 = { value: 10}
    let object2 = object1
    let object3 = { value: 10}

    object1 === object2 //True
    object1 === object3 //False

// C0NTEXT
    // Tells you where you are within the object
    const object4 = {
        a: function(){
            console.log(this)
        }
    }
// SCOPE


// INSTANTIATION
    // When you make a copy of an item and re-use the code.
    class Player{
        //  Every time you are making a copy. The first thing run is the constructor that will create the properties
        constructor(name, type){
            console.log(this)
            this.name = name;
            this.type = type
        }
        introduce(){
            console.log(`hi I am ${this.name}, I am ${this.type}`)
        }
    }

    class Wizard extends Player {
        constructor(name, type){
            // Whenever you extend a class, you need to have super with the properties you need to extend
            super(name, type)
            console.log(this)
        }

        play(){
            console.log(`WEEEEEE I'm a ${this.type}`)
        }
    }

    const wizard1 = new Wizard('Shelly', 'Healer')
    const wizard2 = new Wizard('Shawn', 'Dark Magic')


    class MyArray{
        constructor(){
            this.length = 0
            this.data = 0
        }

        get(index){
            return this.data[index]
        }

        push(item){
            this.data[this.length] = item
            this.length++
            return this.length
        }

        pop(){
            const lastItem = this.data[this.length - 1]
            delete this.data[length - 1]
            this.length--
            return lastItem
        }

        delete(index){
            const item = this.data[index]
            this.shiftItems(index)
        }

        shifItems(index){
            for(let i = index; i < this.length -1; i++ ){
                this.data[i] = this.data[i + 1]
            }
            delete this.data[this.length - 1]
            this.length--
        }
    }

    const newArray = new MyArray()
    newArray.push('Hi')
    newArray.push('You')
    newArray.pop()
    console.log(newArray)
    console.log(newArray.push('hi'))