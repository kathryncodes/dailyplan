import { createContext, useReducer } from "react";

export const ModulesContext = createContext();

export const modulesReducer = (state, action) => {
    switch(action.type){
        case 'GET_MODULES':
            return{
                modules: action.payload
            }
        case 'ADD_MODULE':
            return{
                modules: [...state.modules, action.payload]
            }
        //  case 'UPDATE_MODULE':
            
        //     return{
                
        //     }
        case 'DELETE_MODULE':
            return{
                modules: state.modules.filter((module) => module._id !== action.payload._id)
            }
        default: 
            return state
    }
}

export const ModulesContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(modulesReducer, {
        modules: null
    })

    return(
        <ModulesContext.Provider value={{...state, dispatch}}>
            {children}
        </ModulesContext.Provider>
    )
}