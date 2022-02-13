import React, { useState,useEffect } from 'react';
import store from '../Store.js'
import List from './List.jsx';

function KeywordList({onClick}){
    const [state, setState] = useState({ keywordList: [] });
    useEffect(() => {
        const keywordList = store.getKeywordList();
        setState({ keywordList });
    }, []);
    return (
        <>
            <List data={state.keywordList}
                onClick={onClick}
                hsaIndex/>  
        </>
    )
    
}

export default KeywordList;