import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';


const initialState={
    transactions:[]
}


export const GlobalContext=createContext(initialState);


export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);

    const deleteTransaction=(id)=>{
        dispatch({
            type:'REMOVE_TRANSACTION',
            payload:id
        })
    }

    const addTransaction=(text,amount)=>{
        dispatch({
            type:'ADD_TRANSACTION',
            payload:{
                text:text,
                amount:amount
            }
        })
    }

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}