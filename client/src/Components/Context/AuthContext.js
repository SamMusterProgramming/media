import {createContext, useReducer} from 'react'
import {AuthReducer , INITIAL_STATE} from './AuthReducer';




export const AuthContextProvider =({children}) => {
    // const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    // return (
    //     <AuthContext.Provider 
    //     value={{
    //     user:state.user , 
    //     isFetching:state.isFetching ,
    //     error:state.error,
    //     dispatch,
    //     }}>
    //         {children}
    //     </AuthContext.Provider>
       
    // )
}