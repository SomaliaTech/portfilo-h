import {  createContext, useReducer } from "react"


const initialState = {
darkamode : true
}

export const ThemeContext = createContext(initialState)

const ThemeReducer = (state, action)=> {
switch(action.type){
    case "TOOGLE": 
    return {
        darkamode: !state.darkamode  
    };
    default: 
    return state
}
}

export const ThemeProvider = ({children})=> {
    const [state,dispatch] =useReducer(ThemeReducer,initialState)
    return(
        <ThemeContext.Provider value={{
            darkamode: state.darkamode,
            dispatch
        }}>
            {children}
        </ThemeContext.Provider>
    )
}