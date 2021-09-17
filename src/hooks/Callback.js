import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import ListOfItems from "../ListOfItems";

function Callback() {
    const [colored, setColored] = useState(false);
    const [count, setCount] = useState(0);
    let arrRef = useRef([]);
    let numRef = useRef(0);

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItems = useCallback(() => {
        return new Array(count).fill('').map((_, i) => i + 1);
    }, [count])

    useEffect(() => {
        arrRef.current.length = 2
        arrRef.current.fill('');
        // console.log(arrRef.current)
        // console.log(generateItems())
    }, [])

    useEffect(() => {
        numRef.current++
    })

    return (
        <div className="App">
            {/*<State/>*/}
            {/*<Effect/>*/}
            {/*<Ref/>*/}
            {/*<Memo/>*/}
            <h1 style={styles}>Quantity of elements {count}</h1>
            <button className="btn btn-success" onClick={() => setCount(prevState => prevState + 1)}>Add</button>
            <button className="btn btn-danger" onClick={() => setCount(prevState => prevState - 1)}>Sub</button>
            <button className="btn btn-primary" onClick={() => setColored(prevState => !prevState)}>Sub</button>

            <ListOfItems generateItems={generateItems}/>
        </div>
    );

}

export default Callback;
