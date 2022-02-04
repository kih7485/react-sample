import storage from "./storage.js";
import { createNextId, formatRelativeDate } from "./helpers.js";

const tag = "[store]";

class Store {
  constructor(storage) {
    if (!storage) throw "no storage";
    console.log(tag, "store");
    this.storage = storage;
  }

  search(keyword) {
    return this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }
  getKeywordList() {
    return this.storage.keywordData;
  }
}

const store = new Store(storage);
export default store;
