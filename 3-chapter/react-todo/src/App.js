import React, { useLayoutEffect, useRef, useState } from 'react'

export default function App() {
    const [width, setWidth] = useState(200);
    const boxRef = useRef();
    useLayoutEffect(() => {
      console.log(boxRef.current.getBoundingClientRect().width);
        if(width > 500) {
            setWidth(500);
        }
        let v=0;
        for(let i=0;i<1000000000; i++){
          v+= i*2 +i;
        }
        console.log(v)
    }, [width]);

    return (
        <div>
            <div ref={boxRef} style={{width, height:200, backgroundColor: 'green'}}>test</div>
            <button
                onClick={() => {
                    const value = Math.floor(Math.random()*499+1);
                    setWidth(value);
                }}
            >
                500이하
            </button>
            <button
            onClick={() => {
                const value = Math.floor(Math.random()*500+501);
                setWidth(value);
            }}
            >
                500이상
            </button>
        </div>
    )
}
