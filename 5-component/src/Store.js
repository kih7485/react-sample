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
    this.addHistory(keyword);
    return this.storage.productData.filter((product) =>
      product.name.includes(keyword)
    );
  }
  addHistory(keyword = "") {
    keyword = keyword.trim();
    if (!keyword) return;

    const hasHistory = this.storage.historyData.some(
      (history) => history.keyword === keyword
    );
    if (hasHistory) {
      this.removeHistory(keyword);
    }
    this.storage.historyData.push({
      id: createNextId(this.storage.historyData),
      keyword,
      date: formatRelativeDate(new Date()),
    });
    this.storage.historyData.sort(this._sortHistory);
  }
  getKeywordList() {
    return this.storage.keywordData;
  }
  getHistoryList() {
    return this.storage.historyData.sort(this._sortHistory);
  }
  _sortHistory(history1, history2) {
    return history2.date > history1.date;
  }
  removeHistory(keyword) {
    this.storage.historyData = this.storage.historyData.filter(
      (history) => history.keyword !== keyword
    );
  }
}

const store = new Store(storage);
export default store;
