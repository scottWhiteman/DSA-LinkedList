const LinkedList = require('./LinkedList');
const DoubleLinkedList = require('./DoubleLinkedList');
function main() {
    const SLL = new LinkedList();

    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    SLL.insertLast('Tauhida');

    SLL.remove('squirrel');

    SLL.insertBefore('Athena', 'Boomer');
    SLL.insertAfter('Hotdog', 'Helo');
    SLL.insertAt('Kat', 3);
    
    SLL.remove('Tauhida')
    //SLL.display();
    // console.log(SLL.size());
    // console.log(SLL.isEmpty());
    // console.log(SLL.findPrevious('Boomer').value);
    // console.log(SLL.findLast().value);
    SLL.insertLast('Husker');
    SLL.insertFirst('Boomer');

    //Should remove duplicates
    WhatDoesThisProgramDo(SLL);
    SLL.display();

    //Reverse test
    reverseList(SLL);
    SLL.display();
    
    //Middle from list test
    console.log(middleFromList(SLL).value);

    //Test cycle in non cycle list
    console.log(cycleList(SLL));
    //Test cycle in list with cycle
    SLL.insertLast('Boomer');
    console.log(cycleList(SLL));
}

/*
    4). Mystery Program
        Removes duplicate values that exist within the list by changing pointers to the node after next.
        This is just below O(N^2): It searches through the given list twice.  Since it compares values within the same list, it is not a full N^2 as each iteration gets shorter than the previous
*/
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

/*
    5). Reverse single linked list
*/
function reverseList(lst) {
    let current = lst.head;
    if (current === null) {
        return;
    }
    let prev = null
    let next = current;
    while (current !== null) {
        //get next of current
        next = next.next;
        //set current to point to previous eg. first should point to null and second should point to first
        current.next = prev;
        //set previous to current for next iteration
        prev = current;
        //set current to next
        current = next;
    }
    //Change head from start to end
    lst.head = prev;
}

/*
    6). Third from end
*/
function thirdFromEnd(lst) {
    if (lst.head === null) {
        return null;
    }
    let current = lst.head;
    let third = lst.head;
    for (let i = 0; i < 3; i++) {
        current = current.next;
        if (current === null) {
            return;
        }
    }
    while (current !== null) {
        third = third.next;
        current = current.next;
    }
    return third;
}

/*
    7). Middle from list
*/
function middleFromList(lst) {
    if (lst.head === null) {
        return null;
    }
    let current = lst.head;
    let middle = lst.head;
    let increment = 0;
    while (current !== null) {
        current = current.next;
        if (increment % 2 === 1) {
            middle = middle.next;
        }
        increment++;
    }
    return middle;
}

/*
    8). CycleList
*/
function cycleList(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                return true;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
    return false;
}

/*
    9). Double Linked List
*/
function mainDLL() {
    const DLL = new DoubleLinkedList();
    //Insertion test
    DLL.insertLast('Aquaria');
    DLL.insertLast('Caprica');
    DLL.insertLast('Gemenon');
    DLL.insertLast('Picon');
    DLL.insertLast('Sagittaron');
    DLL.display();
    //Deletion test
    DLL.insertFirst('Tauron');
    DLL.remove('Picon');
    DLL.display();

    //Reverse test
    reverseDLL(DLL);
    DLL.display();
}

/*
    10). Reverse DLL
        With a second link, the need for an additional node index is dismissed
*/
function reverseDLL(lst) {
    if (lst.head === null) {
        return;
    }
    let current = lst.head;
    let prev = null;
    while (current !== null) {
        current.prev = current.next;
        current.next = prev;
        prev = current;
        current = current.prev;
    }
    lst.head = prev;
}
mainDLL();