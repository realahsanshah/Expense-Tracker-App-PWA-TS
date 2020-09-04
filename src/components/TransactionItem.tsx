import React,{useContext} from 'react'
import { GlobalContext } from './../context/GlobalState';
import {transactionType} from '../context/GlobalState';

const TransactionItem =({trans}:{trans:transactionType})=>{
    const {deleteTransaction}=useContext(GlobalContext);

    return(
        <li className={trans.amount>0?"plus":"minus"} onClick={()=>deleteTransaction(trans.id)}>{trans.text} <span>{trans.amount<0?"-":"+"}${Math.abs(trans.amount)}</span></li>
    )

}

export default TransactionItem;