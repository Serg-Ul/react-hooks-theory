import React, {useState, useEffect, useRef, useMemo} from "react";

function Memo() {

    const [number, setNumber] = useState(43);
    const numRef = useRef(42);

    const initialNum = useMemo(() => {
        return numRef.current;
    }, []);

    useEffect(() => {
        numRef.current++
        console.log(numRef.current);
        console.log(initialNum);
    }, [number])

    return (
        <div className="Memo">
            {/*<State/>*/}
            {/*<Effect/>*/}
            {/*<Ref/>*/}
            <h1>Initial {number}</h1>
            <button className="btn btn-success" onClick={() => {
                setNumber(prevState => prevState + 1)
            }}>Add
            </button>
            <button className="btn btn-danger" onClick={() => {
                setNumber(prevState => prevState - 1)
            }}>Sub
            </button>
        </div>
    );

}

export default Memo;
