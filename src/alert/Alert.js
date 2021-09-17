import React from "react"
import {useAlert} from "./AlertContext";

const Alert = () => {
    const alert = useAlert()

    if (!alert.isShowed) return null

    return (
        <div className="alert alert-danger" onClick={alert.onChangeVisible}>
            It is important message
        </div>
    )
}

export default Alert;
