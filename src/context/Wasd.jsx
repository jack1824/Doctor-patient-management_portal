import { createContext } from "react";
import { doctors } from '../assets/assets'

export const WasdProvider = createContext()

const WasdProvider = (props) => {
    const value = {
        doctors
    }

    return (
        <Wasd.Provider value={value}>
            {props.children}  {/*  access children */}
        </Wasd.Provider>
    )
}

export default WasdProvider