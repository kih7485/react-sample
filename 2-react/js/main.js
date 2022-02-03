import store from "../js/Store.js";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    };
  }
  handleChangeInput(event) {
    const searchKeyword = event.target.value;
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
        return { searchKeyword: "" };
      },
      () => {
        //callback
        console.log(this.setState.searchKeyword);
      }
    );
  }
  search(keyword) {
    const searchResult = store.search(keyword);
    this.setState({ searchResult, submitted: true });
    console.log(searchResult, "searchResult");
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
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="contetnt">{this.state.submitted && searchResult}</div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
