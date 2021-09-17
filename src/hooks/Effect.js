import React, {useState, useEffect} from "react";

function Effect() {
    const [type, setType] = useState('users');
    const [color, setColor] = useState('green');

    useEffect(() => {
        console.log('effect')
    }, [color])

    useEffect(() => {
        console.log('ComponentDidMount');


    }, [])

    return (
        <div className="Effect">
            <h1>{type}</h1>
            <button className="btn btn-success" onClick={() => {
                setType('users')
            }} style={{marginRight: 10}}>Change type to users
            </button>
            <button className="btn btn-success" onClick={() => {
                setType('admins')
            }} style={{marginRight: 10}}>Change type to admins
            </button>

            <div className="container">
                <div style={{width: 100, height: 100, backgroundColor: color}}>
                    <button className="btn btn-success" onClick={() => {
                        setColor('red')
                    }}>Change type to admins
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Effect;
