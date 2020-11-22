class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head
        this.length = 1
    }

    // Add at the end of the linked list
    append(value){
        const newNode = {
            value: value,
            next: null,
            prev: this.tail
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        this.length++
        return this
    }

    insert(index, value){
        const newNode = {
            value: value,
            next: null,
            prev: null
        }

        // check params
        if(index >= this.length) this.append(value)
        
        let leader = this.traverseToIndex(index - 1)
        let follower = leader.next
        leader.next = newNode
        newNode.next = follower
        newNode.prev = leader
        follower.prev = dnewNode
        this.length++
        return this.printList()
    }

    traverseToIndex(index){
        let counter = 0
        let currentNode = this.head

        while(counter !== index){
            currentNode = currentNode.next
            counter++
        }
        return currentNode
    }

    remove(index){
        const leader = this.traverseToIndex(index - 1)
        const unwantedNode = leader.next
        leader.next = unwantedNode.next
        this.length--
        return this.printList()
    }

    printList(){
        let array = []
        let nodeValues = this.head

        while(nodeValues !== null){
            array.push(nodeValues.value)
            nodeValues = nodeValues.next
        }
        return array
    }
}



const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2,99)
myLinkedList.printList()