const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView }) {
    console.log(tag, "controller");
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    this.subscribeViewEvents();
    this.render();
  }
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", (event) => this.reset());
  }
  search(searchKeyword) {
    console.log(tag, searchKeyword);
    this.store.search(searchKeyword);
    this.render();
  }
  reset() {
    console.log(tag, "reset");
    this.store.reset();
    this.searchResultView.hide();
  }

  render() {
    console.log(this.store);
    if (this.store.searchKeyword.length > 0) {
      this.tabView.hide();
      this.searchResultView.show(this.store.searchResult);
      return;
    }
    this.tabView.show();
    this.searchResultView.hide();
  }
}
