/** Class representing a Queue.
 * @constructor
 */

class Queue {
  constructor() {
    this.#storage = [];
  }

  #storage;

  print() {
    console.log(this.#storage.join(","));
  }

  /*
   * Enqueues a new value at the end of the queue
   * @param {*} value the value to enqueue
   */
  enqueue(value) {
    this.#storage.push(value);
    return this;
  }

  /*
   * Dequeues the value from the beginning of the queue and returns it
   * @return {*} the first and oldest value in the queue
   */
  dequeue() {
    return this.#storage.shift();
  }
  /*
   * Returns the value at the beginning of the queue without removing it from the queue
   * @return {*} the first and oldest value in the queue
   */
  peek() {
    return this.#storage[0];
  }
}

const myQueue = new Queue();

myQueue.enqueue("a").enqueue("b").enqueue("c");
myQueue.print();
console.log(myQueue.dequeue());
myQueue.print();
console.log(myQueue.peek());
myQueue.print();
