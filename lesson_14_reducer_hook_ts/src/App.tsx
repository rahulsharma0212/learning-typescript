import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Counter>{(count: number) => <>Current Count: {count}</>}</Counter>
        </>
    );
}

export default App;
