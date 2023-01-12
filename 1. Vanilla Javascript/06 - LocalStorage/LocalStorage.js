/**
 * This class is used to store data in the browser's local storage.
 * @class LocalStorage
 * @method get - Get a value from local storage
 * @method set - Set a value in local storage
 * @method remove - Remove a value from local storage
 * @method clear - Clear all values from local storage
 * @method getAll - Get all values from local storage
 *
 * Remember to use JSON.stringify() and JSON.parse() when storing and retrieving objects.
 *
 * @example use the LocalStorage class in our Vanilla Javascript/06 LocalStorage to see if it worked
 */

class LocalStorage {
  constructor() {}

  getAll() {
    const allValues = {};
    for (let i = 0; i < window.localStorage.length; i++) {
      allValues[window.localStorage.key(i)] = this.#getOneItem(
        window.localStorage.key(i)
      );
    }
    return allValues;
  }

  #getOneItem(key) {
    const value = window.localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }

  get(keys) {
    if (typeof keys === "object") {
      const obj = {};
      for (const [key, value] of Object.entries(keys)) {
        obj[key] = this.#getOneItem(key);
        if (obj[key] === null) {
          obj[key] = value;
        }
      }
      return obj;
    } else {
      return this.#getOneItem(keys);
    }
  }

  set(key, value) {
    if (typeof value === "object" || Array.isArray(value)) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.setItem(key, value);
    }
  }

  remove(key) {
    window.localStorage.removeItem(key);
  }

  clear() {
    window.localStorage.clear();
  }
}

window.ls = new LocalStorage();
