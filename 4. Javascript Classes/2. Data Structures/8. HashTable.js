/** Class representing a Hash Table */

class HashTable {
  constructor() {
    this.#storage = {};
  }

  #storage;

  /*
   * Inserts a new key-value pair
   * @param {string} key - the key associated with the value
   * @param {*} value - the value to insert
   */
  insert(key, value) {
    const index = this.#hash(key, Object.keys(this.#storage).length + 1);
    this.#storage[index] = value;
    return this;
  }
  /*
   * Deletes a key-value pair
   * @param {string} key - the key associated with the value
   * @return {*} value - the deleted value
   */
  remove(key) {
    const index = this.#hash(key, Object.keys(this.#storage).length);
    const value = this.#storage[index];
    delete this.#storage[index];
    return value;
  }
  /*
   * Returns the value associated with a key
   * @param {string} key - the key to search for
   * @return {*} - the value associated with the key
   */
  retrieve(key) {
    const index = this.#hash(key, Object.keys(this.#storage).length);
    return this.#storage[index];
  }
  /*
   * Hashes string value into an integer that can be mapped to an array index
   * @param {string} str - the string to be hashed
   * @param {number} n - the size of the storage array
   * @return {number} - an integer between 0 and n
   */
  #hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) sum += str.charCodeAt(i) * 3;

    // console.log(str, " ", n, " ", "key  : ", sum);
    //console.log(sum % n);
    return sum;
  }

  print() {
    console.log(this.#storage);
  }
}

const myHashTable = new HashTable();

myHashTable
  .insert("key1", "value1")
  .insert("key2", "value2")
  .insert("key3", "value3");
myHashTable.print();
console.log(myHashTable.remove("key2"));
myHashTable.print();
console.log(myHashTable.retrieve("key3"));
myHashTable.print();
