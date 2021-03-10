import * as React from 'react'
import { useState } from 'react';

function test(): React.ReactNode {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>TEST</h1>
            <button onClick={increment}>Click me</button>
            <p>{count}</p>
        </div>
    )
}
