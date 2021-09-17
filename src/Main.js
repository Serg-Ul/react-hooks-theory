import React from "react";
import {useAlert} from "./alert/AlertContext";

const Main = (props) => {
    const alert = useAlert();

    // useEffect(() => {
    //     console.log(alert);
    // }, [])

    return (
        <div className="Main">
            <h1>Hello from the context example</h1>
            <button className="btn btn-success" onClick={alert.onChangeVisible}>
                Show alert
            </button>
        </div>
    )
}

export default Main