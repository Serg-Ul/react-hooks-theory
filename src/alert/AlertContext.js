import React, {useContext, useReducer} from "react"
import {CHANGE_VISIBLE_ALERT} from "../redux/actions/actionTypes";

const AlertContext = React.createContext();

export const useAlert = () => useContext(AlertContext);

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_VISIBLE_ALERT:
            return {
                ...state,
                isShowed: !state.isShowed
            }
        default :
            return state
    }
}

const AlertProvider = (props) => {
    // const [isShowed, setShowed] = useState(false);
    //
    // const toggle = () => {
    //     setShowed(prevState => !prevState)
    // }

    const [state, dispatch] = useReducer(reducer, {
        isShowed: false
    });

    const onChangeVisible = () => dispatch({type: CHANGE_VISIBLE_ALERT})

    return (
        <AlertContext.Provider value={{isShowed: state.isShowed, onChangeVisible}}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertProvider;