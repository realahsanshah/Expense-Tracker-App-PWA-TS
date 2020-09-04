import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';

type stateType={
    transactions:number[],
    deleteTransaction:any,
    addTransaction:any
}

const initialState:stateType={
    transactions:[],
    deleteTransaction:null,
    addTransaction:null,
}


export const GlobalContext=createContext(initialState);

export const GlobalProvider=({children}:{children:any})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    const deleteTransaction=(id:any)=>{
        dispatch({
            type:'REMOVE_TRANSACTION',
            payload:id
        })
    }

    const addTransaction=(text:string,amount:string)=>{
        dispatch({
            type:'ADD_TRANSACTION',
            payload:{
                text,
                amount
            }
        })
    }

    return (
        <GlobalContext.Provider 
            value={{
                transactions:state.transactions,
                deleteTransaction,
                addTransaction
            }}>
                {children}
        </GlobalContext.Provider>
    )

}