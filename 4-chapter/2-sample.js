import React from 'react'

function GreetingA({isLogin, name}){
    if(isLogin){
        return (
            <p className="greeting" onClick={showMenu} >
                {`${name}님 안녕하세요.`}
            </p>
        )
    }else{
        return(
            <p className="noAuth" onClick={gotoLoginPage} >
                권한이 없습니다.
            </p>
        )
    }
}


export default function sample2() {
    return (
        <div>
            
        </div>
    )
}
