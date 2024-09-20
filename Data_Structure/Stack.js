
// *************************************STACK*************************************************

// In JavaScript, a stack is a data structure, when we talk about stacks in JavaScript,
//       we refer to a collection of elements that follow a specific order for adding and
//       removing items.This order is known as “Last In, First Out” (LIFO).Think of a stack
//        of plates.You add plates to the top and take them off from the top too.This is
//        the core idea behind a stack in programming — the last thing you put in is the
//        first thing you take out.


class Stack {
      constructor() {
            this.items = []
      }
      //pushing to stack
      push(number) {
            this.items.push(number)
      }
      //take the top number off the stack
      pop() {
            if (this.items.length === 0) {
                  return "Oops,the stack is empty!"
            }
            return this.items.pop()
      }
      //see what the top number is
      peek() {
            return this.items[this.items.length - 1]
      }
      //check if the stack is empty 
      isEmpty() {
            return this.items.length === 0
      }
      //find how many items are in the stack
      size() {
            return this.items.length
      }
}


// let myStack = new Stack();
// myStack.push(5);
// myStack.push(10);
// console.log(myStack.peek());  // Output: 10
// myStack.pop();
// console.log(myStack.peek());  // Output: 5















// When Would You Use a Stack?

// You might be wondering where stacks are used in real life. Here are some examples:

//     Managing Functions: JavaScript uses a stack to keep track of functions.
//      When a function is called, it goes on the stack.When it’s done, it comes off.
//     Undo Buttons: Like in a text editor, where you can undo your last actions.
//     Solving Puzzles: Some puzzles can be solved using stacks.

//       Stacks in JavaScript are simple yet powerful.By using arrays, we can easily add and
//  remove items from our stack.Remember, it’s all about adding to the top and taking from
//  the top — just like a stack of plates!