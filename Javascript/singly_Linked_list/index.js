class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// create singlyLinkedList class here

class SinglyLinkedList{
    constructor() {
        
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    
    push(value) {
        const newNode = new Node(value);

        this.length++;

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;

            return this;
        } 

        this.tail.next = newNode;
        this.tail = newNode;
        
        // return this;
        return JSON.stringify(this);
    }

    pop() {
        if(!this.head) return null;

        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if(!this.head) return undefined;

        let currentHead = this.head;

        this.head = currentHead.next;
        this.length--;

        if(this.length === 0) {
            this.tail = null;
        }
        // console.log(currentHead)

        // currentHead.next = null;
        return currentHead;
    }

    unshift(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        // return this;
        return JSON.stringify(this);
    }

    toStr() {
        return JSON.stringify(this, null, 2);
    }
    
}

//push(element)
//pop()
//shift()
//unshift(element)

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.push(4));

console.log(list.unshift(0));

console.log(JSON.parse(list.toStr()));





