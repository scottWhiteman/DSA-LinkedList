const _Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        let currNode = this.head;
        if (currNode === null) {
            return null;
        }
        while(currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    findPrevious(item) {
        let currNode = this.head;
        let prevNode = null;
        if (currNode === null) {
            return null;
        }
        while (currNode.value !== item && currNode.next !== null) {
            prevNode = currNode;
            currNode = currNode.next

        }
        return prevNode;
    }
    findLast() {
        if (this.head === null) {
            return null;
        }
        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }
    remove(item) {
        if(!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let prevNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            return;
        }
        prevNode.next = currNode.next;
    }
    insertBefore(newNode, item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.insertLast(newNode);
            return;
        }
        let currNode = this.head;
        let prevNode = this.head;
        while((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode;
            currNode = currNode.next
        }
        if (currNode === null) {
            console.log('Not found')
            return;
        }
        let tempNode = currNode;
        prevNode.next = new _Node(newNode, tempNode);
    }
    insertAfter(newNode, item) {
        if (!this.head) {
            return null;
        }
        let currNode = this.head;
        while((nextNode !== null) && (currNode.value !== item)) {
            currNode = nextNode;
        }
        if (currNode === null) {
            console.log('Not found');
            return;
        }
        let nextNode = currNode.next;
        currNode.next = new _Node(newNode, nextNode);
    }
    insertAt(newNode, index) {
        if (index === 0) {
            this.insertLast(newNode);
            return;
        }
        let currNode = this.head;
        let nextNode = this.head.next;
        for (let i = 1; i < index && currNode !== null; i++) {
            currNode = nextNode;
            nextNode = nextNode.next;
        }
        if (currNode === null) {
            console.log('Index Error');
            return;
        }
        currNode.next = new _Node(newNode, nextNode);
    }
    display() {
        let currNode = this.head;
        while((currNode !== null)) {
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }
    size() {
        let i = 0;
        let currNode = this.head;
        while(currNode !== null) {
            currNode = currNode.next;
            i++;
        }
        return i;
    }
    isEmpty() {
        return this.head === null;
    }
}

module.exports = LinkedList;