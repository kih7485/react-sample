class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "hello",
    };
  }
  handleChangeInput(event) {
    this.setState({
      searchKeyword: event.target.value,
    });
    // this.state.searchKeyword = event.target.value;
    // this.forceUpdate(); //onchange 이벤트 발생 시 다시 렌더링. 이벤트가 발생할때마다 강제로 업데이트 하기 떄문에 추천하지 않는 방식
  }
  render() {
    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form id="search-form-view">
            <input
              type="text"
              placeholder="검색어를 입력하세요."
              autoFocus
              value={this.state.searchKeyword}
              onChange={(event) => {
                this.handleChangeInput(event);
              }}
            />
            <button type="reset" className="btn-reset"></button>
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
