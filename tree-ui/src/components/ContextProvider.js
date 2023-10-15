import { createContext, useMemo, useState } from "react";
import department from "./fake_response";

export const OKRContext = createContext({
    /**
     * 1 dept have more teams
     * 1 team have more objectives
     * 1 objective have more objectives or keyresult
     */
    // department: department,
    // setUserName: () => { },
    state: department,
    setState: () => { }
});

const Provider = ({ children }) => {
    const [state, setState] = useState(department);
    const value = useMemo(
        () => ({ state, setState }),
        [state]
    );

    return (
        <OKRContext.Provider value={value}>
            {children}
        </OKRContext.Provider>
    )

}

export default Provider