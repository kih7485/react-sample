import store from "../js/Store.js";
import { formatRelativeDate } from "../js/helpers.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLabel = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
      keywordList: [],
      historyList: [],
    };
  }
  componentDidMount() {
    const keywordList = store.getKeywordList();
    const historyList = store.getHistoryList();

    this.setState({ keywordList, historyList });
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    console.log(searchKeyword, "searchKeyword");
    if (searchKeyword.length <= 0) {
      return this.handleReset();
    }
    this.setState({
      searchKeyword,
    });

    // this.state.searchKeyword = event.target.value;
    // this.forceUpdate(); //onchange 이벤트 발생 시 다시 렌더링. 이벤트가 발생할때마다 강제로 업데이트 하기 떄문에 추천하지 않는 방식
  }
  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.searchKeyword);
  }
  handleReset() {
    this.setState(
      () => {
        return { searchKeyword: "", submitted: false };
      },
      () => {
        //callback
        console.log(this.setState.searchKeyword);
      }
    );
  }
  handleClickRemoveHistory(event, keyword) {
    event.stopPropagation(); //상위 객체 이벤트 버블링 차단

    store.removeHistory(keyword);
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }
  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    const historyList = store.getHistoryList();

    this.setState({
      searchKeyword,
      searchResult,
      historyList,
      submitted: true,
    });
  }
  render() {
    let resetButton = null;
    if (this.state.searchKeyword.length > 0) {
      resetButton = <button type="reset" className="btn-reset"></button>;
    }
    const searchForm = (
      <form
        onSubmit={(event) => {
          this.handleSubmit(event);
        }}
        onReset={() => this.handleReset()}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          autoFocus
          value={this.state.searchKeyword}
          onChange={(event) => {
            this.handleChangeInput(event);
          }}
        />
        {resetButton}
        {/* {this.state.searchKeyword.length > 0 ? (
              <button type="reset" className="btn-reset"></button>
            ) : null} */}
        {/* {this.state.searchKeyword.length > 0 && (
              <button type="reset" className="btn-reset"></button>
            )} */}
      </form>
    );

    const searchResult =
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="empty-box">검색 결과가 없습니다.</div>
      );
    const keywordList = (
      <>
        <ul className="list">
          {this.state.keywordList.map(({ id, keyword }, index) => {
            return (
              <li
                key={id}
                onClick={() => {
                  return this.search(keyword);
                }}
              >
                <span className="number">{index + 1}</span>
                <span>{keyword}</span>
              </li>
            );
          })}
        </ul>
      </>
    );
    const historyList = (
      <>
        <ul className="list">
          {this.state.historyList.map(({ id, keyword, date }, index) => {
            return (
              <li
                key={id}
                onClick={() => {
                  return this.search(keyword);
                }}
              >
                <span className="number">{index + 1}</span>
                <span>{keyword}</span>
                <span className="date">{formatRelativeDate(date)}</span>
                <button
                  className="btn-remove"
                  onClick={(event) =>
                    this.handleClickRemoveHistory(event, keyword)
                  }
                ></button>
              </li>
            );
          })}
        </ul>
      </>
    );

    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tabType) => {
            return (
              <li
                className={this.state.selectedTab === tabType ? "active" : ""}
                key={tabType}
                onClick={() => this.setState({ selectedTab: tabType })}
              >
                {TabLabel[tabType]}
              </li>
            );
          })}
        </ul>
        {this.state.selectedTab === TabType.KEYWORD && keywordList}
        {this.state.selectedTab === TabType.HISTORY && historyList}
      </>
    );
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}

          <div className="contetnt">
            {this.state.submitted ? searchResult : tabs}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
