import { useState } from "react";
import './style.css'


export default function CounterApp() {

    const [count, setCount] = useState(0);
    function handleIncrement() {
        setCount(count + 1)
    }

    return (
        <>
            <div className="wrapper">
                <h1>Challenge-1 Counter</h1>
                <h3 style={{color:'lightblue'}}>Up Counter</h3>
                <p style={{ fontSize: '50px' }}>{count}</p>
                <div className="btn">
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={() => {
                        count <= 0 ? setCount(count = 0) :
                        setCount(count - 1)
                    }}>
                        Decrement
                    </button>
                </div>

            </div>


        </>
    )

}