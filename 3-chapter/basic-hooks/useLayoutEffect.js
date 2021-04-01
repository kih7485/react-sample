import React, { useEffect, useState } from 'react'

export default function useLayoutEffect() {
    const [width, setWidth] = useState(200);
    useEffect(() => {
        if(width > 500) {
            setWidth(500);
        }
    }, [width]);

    return (
        <div>
            <div style={{width, height:200, backgroundColor: 'green'}}>test</div>
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
