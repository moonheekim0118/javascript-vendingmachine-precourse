export default class Storage {
  constructor(key, storage = localStorage) {
    this.key = key;
    this.storage = storage;
  }

  get() {
    const items = this.storage.getItem(this.key) ?? '[]';
    return JSON.parse(items);
  }

  set(items) {
    this.storage.setItem(this.key, JSON.stringify(items));
  }
}
