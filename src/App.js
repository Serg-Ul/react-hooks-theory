import './App.css';
import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
// import ContextAndReducer from "./hooks/ContextAndReducer";
// import Callback from "./hooks/Callback";
// import Memo from "./hooks/Memo";
// import Ref from "./hooks/Ref";
// import State from "./hooks/State";
// import Effect from "./hooks/Effect";

function useLogger(value) {
    useEffect(() => {
        console.log('Value is changed', value)
    }, [value]);
}

function useInput(initialValue, type = 'text') {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

function App() {
    const name = useInput('')

    useLogger(name.value)

    return (
        <div className="App">
            {/*<State/>*/}
            {/*<Effect/>*/}
            {/*<Ref/>*/}
            {/*<Memo/>*/}
            {/*<Callback/>*/}
            {/*<ContextAndReducer/>*/}
            <h1>{name.value}</h1>
            <input {...name}/>
        </div>
    );

}

export default App;
