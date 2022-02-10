import { useState } from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
import store from '../src/Store.js'
function App() {
  const [state, setState] = useState({
    searchKeyword: ""
    , searchResult: []
    , submitted: false
  })
    
  const search = searchKeyword => {
    console.log(searchKeyword, "searchKeyword");

    const searchResult = store.search(state.searchKeyword);
    console.log(searchResult)

    setState({searchResult, submitted:true})
  }
  const handleReset = () => {
    console.log("reset");
    setState({searchKeyword:"", submitted:false})
  }
  const handleChangeInput = searchKeyword => {
    if (searchKeyword.length <= 0) {
      handleReset();
    }
    setState({ searchKeyword });
  }
  return (
    <>
      <Header title="검색" />
      <div className='container'>
        <SearchForm value={state.searchKeyword}
          onChange={value => handleChangeInput(value)}
          onSubmit={searchKeyword => search(searchKeyword)}
          onReset={()=>handleReset()}
        />

      <div className='content'>
        {state.submitted && <SearchResult data={state.searchResult}/>}
      </div>
      </div>
    </>
  )
}

export default App
