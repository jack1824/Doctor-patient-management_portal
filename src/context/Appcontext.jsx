import { createContext } from "react";
import { doctors } from'./assets/assets'

export const Appcontext = createContext()

const Appcontextprovider = (props) => {

    const value={
            doctors
    }
    return(
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}
export default Appcontextprovider