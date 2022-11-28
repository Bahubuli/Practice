import React, { useEffect } from 'react'
import  styles from './Home.module.css';

import { useState } from 'react';

export default function DisplayBalance({transactions}) {

    const [balance,setBalance] = useState(0);
    const [income,setIncome] = useState(0);
    const [expense,setExpense] = useState(0);


    useEffect(()=>{
        setIncome(0);
        setExpense(0);
        setBalance(0);
        transactions.map((t)=>{
            if(t.amount<0) setExpense(prev => prev+parseInt(t.amount))
            else setIncome(prev =>prev+parseInt(t.amount));
            setBalance(prev =>prev+parseInt(t.amount));
        })

    },[transactions])



  return (
    <div>
    <div className = {styles.balance}>
            <p className = {styles.balance_amount}>
                <p>Your Balance </p>
                <p>₹{balance}</p>
            </p>
        </div>
        <div className = {styles.income_expense}>
            <div className = {styles.income}>
                <p>Income</p>
                <p>₹{income}</p>
            </div>
            <div className = {styles.expense}>
                <p>Expense</p>
                <p >₹{expense}</p>
            </div>
        </div>
    </div>
  )
}
