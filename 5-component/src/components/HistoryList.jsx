import React, { useState,useEffect } from 'react';
import { formatRelativeDate } from '../helpers.js';
import store from '../Store.js'
import List from './List.jsx';

function HistoryList({onClick}){
    const [state, setState] = useState({ historyList: [] });
    const fetch = () => {
        const historyList = store.getHistoryList();
        setState({ historyList });
    }
   
    const handleClickRemoveHistory = (keyword) => {
        store.removeHistory(keyword);
        fetch();
    }

    useEffect(() => {
        fetch();
    }, []);
    return (
        <>
            <List
                data={state.historyList}
                onClick={onClick}
                hasDate
                onRemove={(keyword) => handleClickRemoveHistory(keyword)}
            />  
        </>
    )
    
}

export default HistoryList;
