import React, {useState} from 'react';
import classes from "./Counter.module.scss";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    return (
        <div>
            <h1 className={classes.open}>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;