import React,{useContext} from 'react'
import { GlobalContext } from './../context/GlobalState';
import TransactionItem from './TransactionItem';

const History=()=>{
    const {transactions}=useContext(GlobalContext);

    return(
        <div>
            <h4>History</h4>
            <ul className='list'>
                {transactions.map(trans=><TransactionItem key={trans.id} trans={trans} />)}
            </ul>
        </div>
    )

}

export default History;