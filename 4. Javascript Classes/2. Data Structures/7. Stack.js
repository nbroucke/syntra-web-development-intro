/** Class representing a Stack. */

class Stack {
  constructor() {
    this.#storage = [];
  }

  #storage;
  /*
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    this.#storage.push(value);
    return this;
  }

  print() {
    console.log(this.#storage.join(","));
  }

  /*
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    this.#storage.pop();
    return this;
  }
  /*
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    return this.#storage[this.#storage.length - 1];
  }
}

const myStack = new Stack();

myStack.push("a").push("b").push("c");
myStack.print();
//myStack.push("b");
//myStack.push("c");
//myStack.print();
myStack.pop().pop();
myStack.print();
myStack.peek();
myStack.print();
