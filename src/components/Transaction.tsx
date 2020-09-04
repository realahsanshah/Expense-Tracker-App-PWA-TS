import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

const Transaction = () => {
    const [text,setText]=useState<string>();
    const [amount,setAmount]=useState<number>();
    const {addTransaction}=useContext(GlobalContext);

    const handleSubmit=(text:string|undefined,amount:number|undefined)=>{
        if(text==="")
        return;
        if(amount===0)
        return;
        addTransaction(text,Number(amount));
        setText("");
        setAmount(0);
    }
    return ( 
        <div>
            <h3>Add new Transaction</h3>
            <form>
                <div className="form-control">
                    <label>Text</label>
                    <input onChange={(e)=>setText(e.target.value)} type='text' className='form-control' name='text' placeholder='Detail' value={text}/>
                </div>
                <div className="form-control">
                    <label>Amount<br/>(negative - expense, positive - income)</label>
                    <input onChange={(e)=>setAmount(parseInt(e.target.value))} type='number' className='form-control' name='amount' placeholder='Amount' value={amount}/>
                </div>
                <button className='btn' onClick={(e)=>{e.preventDefault();handleSubmit(text,amount);}}>Add Transaction</button>
            </form>
        </div>
    );
}

export default Transaction;