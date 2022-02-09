import React, { useState } from 'react';

function SearchForm() {
    const [state, setState]  = useState({searchKeyword:""})
    const handleChangeInput = (event) => {
        const searchKeyword = event.target.value;
        setState({searchKeyword});
    } 
    
    return (
        <form>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          autoFocus
          value={state.searchKeyword}
          onChange={(event) => {
            handleChangeInput(event);
          }}
        />
        </form>
    );
}

export default SearchForm;
