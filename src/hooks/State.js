import React, {useState} from "react"

export default function State() {
    const [counter, setCounter] = useState(0);

    function increment_num_1() {
        setCounter(counter + 1);
    }

    function decrement_num_1() {
        setCounter(counter - 1);
    }

    // =>

    function increment() {
        setCounter((prevCounter) => {
            return prevCounter + 1
        })
    }

    function decrement() {
        setCounter((prevCounter) => {
            return prevCounter - 1
        })
    }

    // =>

    return (
        <div className="State">
            <h1>Counter {counter}</h1>
            <button className="btn btn-success" onClick={() => {
                setCounter(counter + 1)
            }} style={{marginRight: 10}}>Add
            </button>
            <button className="btn btn-danger" onClick={() => {
                setCounter(counter - 1)
            }}>Delete
            </button>
        </div>
    );
}
