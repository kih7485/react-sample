import React, { useState,useEffect } from 'react';
import store from '../Store.js'
import List from './List.jsx';

function KeywordList({onClick}){
    const [state, setState] = useState({ data: [] });
    useEffect(() => {
        const data = store.getKeywordList();
        setState({ data });
    }, []);
    return (
        <>
            <ul className='list'>
                {state.data.map((item, index) => {
                    return (
                        <List key={item.id} item={item} index={index} onClick={onClick}>
                            <span className="number">{index + 1}</span>
                            <span>{item.keyword}</span>
                        </List>
                    )
                })}      
            </ul>
            
        </>
    )
    
}

export default KeywordList;