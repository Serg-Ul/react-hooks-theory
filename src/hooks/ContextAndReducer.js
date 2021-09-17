import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import AlertProvider from "../alert/AlertContext";
import Alert from "../alert/Alert";
import Main from "../Main";

function ContextAndReducer() {
    // const [isShowed, setShowed] = useState(false);

    return (
        <div className="Context">
            <div className="container pt-3">
                {/*<Context.Provider value={{isShowed, setShowed}}>*/}
                {/*=>*/}
                <AlertProvider>
                    <Alert/>
                    <Main/>
                </AlertProvider>
                {/*<=*/}
                {/*</Context.Provider>*/}
            </div>
        </div>
    );

}

export default ContextAndReducer;
