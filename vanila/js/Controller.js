import { TabType } from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(
    store,
    {
      searchFormView,
      searchResultView,
      tabView,
      keywordListView,
      historyListView,
    }
  ) {
    console.log(tag, "controller");
    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;
    this.keywordListView = keywordListView;
    this.historyListView = historyListView;
    this.subscribeViewEvents();
    this.render();
  }
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", (event) => this.reset());

    this.tabView.on("@change", (event) => this.changeTab(event.detail.value));

    this.keywordListView.on("@click", (event) => {
      this.search(event.detail.value);
    });

    this.historyListView.on("@click", (event) => {
      this.search(event.detail.value);
    });

    this.historyListView.on("@remove", (event) => {
      this.removeHistory(event.detail.value);
    });
  }
  search(searchKeyword) {
    console.log(tag, searchKeyword);
    this.store.search(searchKeyword);
    this.addHistory(searchKeyword);
    this.render();
  }
  reset() {
    console.log(tag, "reset");
    this.store.reset();
    this.render();
  }

  render() {
    if (this.store.searchKeyword.length > 0) {
      return this.renderSearchResult();
    }
    this.tabView.show(this.store.selectedTab);
    if (this.store.selectedTab === TabType.KEYWORD) {
      this.keywordListView.show(this.store.getKeywordList());
      this.historyListView.hide();
    } else if (this.store.selectedTab === TabType.HISTORY) {
      this.historyListView.show(this.store.getHistoryList());
      this.keywordListView.hide();
    } else {
      throw Error("사용할 수 없는 탭입니다.");
    }

    this.searchResultView.hide();
  }
  renderSearchResult() {
    this.searchFormView.show(this.store.searchKeyword);
    this.tabView.hide();
    this.keywordListView.hide();
    this.historyListView.hide();

    this.searchResultView.show(this.store.searchResult);
  }

  changeTab(tab) {
    this.store.selectedTab = tab;
    this.render();
  }

  addHistory(keyword) {
    this.store.addHistory(keyword);
  }
  removeHistory(keyword) {
    this.store.removeHistory(keyword);
    this.render();
  }
}
