import { useState } from 'react'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import SearchResult from './components/SearchResult'
import store from '../src/Store.js'
import Tabs, { TabType } from './components/Tabs'
import KeywordList from './components/KeywordList'
import HistoryList from './components/HistoryList'
function App() {
  const [state, setState] = useState({
    searchKeyword: ""
    , searchResult: []
    , submitted: false
    , selectedTab: TabType.KEYWORD
  })
    
  const search = searchKeyword => {
    console.log(searchKeyword, "searchKeyword")
    const searchResult = store.search(searchKeyword);
    setState(state => ({...state, searchKeyword, searchResult, submitted:true}) )
  }
  const handleReset = () => {
    console.log("reset");
    setState(state => ({...state, searchKeyword:"", submitted:false}))
  }
  const handleChangeInput = searchKeyword => {
    if (searchKeyword.length <= 0) {
      handleReset();
    }
    setState(state => ({...state, searchKeyword }));
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
          {state.submitted ? <SearchResult data={state.searchResult} /> :
            <>
              <Tabs selectedTab={state.selectedTab} onChange={(selectedTab) => setState(state => ({ ...state, selectedTab }))} />
              {state.selectedTab === TabType.KEYWORD && <KeywordList onClick={(keyword) => search(keyword)}/>}
              {state.selectedTab === TabType.HISTORY && <HistoryList onClick={(keyword) => search(keyword)}/>}
            </>
          }
      </div>
        
      </div>
    </>
  )
}

export default App
