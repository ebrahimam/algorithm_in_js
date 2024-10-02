// *************************LinkedList*************************

// a linked list is a linear collection of data elements whose order
//  is not given by their physical placement in memory.Instead,
//       each element points to the next.It is a data structure consisting
//        of a collection of nodes which together represent a sequence.

class Node {
      constructor(element) {
            this.element = element;
            this.next = null;
      }
}

class LinkedList {
      constructor() {
            this.head = null
            this.size = 0
      }
      add(element) {
            let node = new Node(element);

            let current;

            if (this.head == null) {
                  this.head = node;
            } else {
                  current = this.head;
                  while (current.next) {
                        current.next = node;

                  }
                  current.next = node
            }
            this.size++

      }
      insertAt(element, index) {
            if (index < 0 || index > this.size)
                  return console.log("please enter valid index.");
            else {
                  let node = new Node(element);
                  let curr, prev;

                  curr = this.head;
                  if (index == 0) {
                        node.next = this.head;
                        this.head = node;
                  } else {
                        curr = this.head;
                        let it = 0;

                        while (it < index) {
                              it++;
                              prev = curr;
                              curr = curr.next
                        }
                        node.next = curr;
                        prev.next = node
                  }
                  this.size++
            }
      }
      removeFrom(index) {
            if (index < 0 || index >= this.size)
                  return console.log("Please Enter a valid index");
            else {
                  let curr, prev, it = 0;
                  curr = this.head;
                  prev = curr;


                  if (index === 0) {
                        this.head = curr.next;
                  } else {
                        while (it < index) {
                              it++;
                              prev = curr;
                              curr = curr.next;
                        }
                        prev.next = curr.next;
                  }
                  this.size--;
                  return curr.element;
            }
      }
      removeElement(element) {
            let current = this.head;
            let prev = null;
            while (current != null) {
                  if (current.element === element) {
                        if (prev == null) {
                              this.head = current.next;
                        } else {
                              prev.next = current.next;
                        }
                        this.size--;
                        return current.element;
                  }
                  prev = current;
                  current = current.next;
            }
            return -1;
      }
      isEmpty() {
            return this.size == 0;
      }
      size_of_list() {
            console.log(this.size);
      }
      printList() {
            let curr = this.head;
            let str = "";
            while (curr) {
                  str += curr.element + " ";
                  curr = curr.next;
            }
            console.log(str);
      }
}




// ******************Example**********************************
// creating an object for the
// Linkedlist class
let ll = new LinkedList();
 
// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());
 
// adding element to the list
ll.add(10);
 
// prints 10
ll.printList();
 
// returns 1
console.log(ll.size_of_list());
 
// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
 
// returns 10 20 30 40 50
ll.printList();
 
// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));
 
// prints 10 20 30 40
ll.printList();
 
// returns 3
console.log("Index of 40 " + ll.indexOf(40));
 
// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);
 
ll.printList();
 
// returns false
console.log("is List Empty ? " + ll.isEmpty());
 
// remove 3rd element from the list
console.log(ll.removeFrom(3));
 
// prints 10 20 60 40
ll.printList();





