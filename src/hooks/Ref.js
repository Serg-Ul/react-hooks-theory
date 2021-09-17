import React, {useState, useEffect, useRef} from "react";

function Ref() {
    const [counter, renderCounter] = useState(1);
    const [value, changeValue] = useState('Default value');
    const valRef = useRef(1);
    const linkRef = useRef(null);
    const prevValRef = useRef('');

    useEffect(() => {
        renderCounter(prev => prev + 1);
        prevValRef.current = value;
        console.log('rendered counter')
    }, [value])

    useEffect(() => {
        valRef.current++ // => valRef.current += 1
    });

    useEffect(() => {
        console.log(linkRef.current.getAttribute('href'))
    }, [])

    return (
        <div className="Ref">
            <h1>Counter {counter}</h1>
            <h2>Ref counter {valRef.current}</h2>
            <h3>Input value {value}</h3>
            <h4>PrevValRef {prevValRef.current}</h4>
            <input type="text" onChange={event => {
                changeValue(event.target.value);
            }} value={value}/>
            <a href="https://google.com" ref={linkRef}></a>
            <button onClick={() => {renderCounter(prev => prev + 1)}}>Render</button>
        </div>
    );
}

export default Ref;
