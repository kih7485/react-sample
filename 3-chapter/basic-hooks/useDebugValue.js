import React, { useState } from 'react'

export default function useDebugValue() {
    const [state, setState] = useState(STATE_START);
    const next = () => setState(state === STATE_STOP ? STATE_START : state +1);
    return (
        [state, next]
    )
}

export const STATE_START = 0;
export const STATE_RUNNING = 1;
export const STATE_STOP = 2;
