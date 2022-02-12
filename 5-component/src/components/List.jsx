import React, { cloneElement, useState } from 'react';


export const renderItem = (item, index) => {
        throw "renderItem() 을 구현하세요";
}
    
function List({onClick, children,item, index}) {
    return ( 
        <li onClick={() => onClick(item.keyword)}>
            {children}
        </li>
  );
}

export default List;
