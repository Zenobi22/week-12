import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


export const IncomeExpenses = () => {
  const {transaction} = useContext(GlobalContext);

  const amounts = transaction.map(transaction => transaction.amount);


  const income = amounts
   .filter(item => item > 0) // will put out amounts when greater than 0
   .reduce((acc, item) => (acc += item), 0) //will give a total
   .toFixed(2); // will convert a number to a string

   const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item),0) * -1
   ).toFixed(2);

  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className="money plus">${income}</p>
    </div>
     
    <div>
      <h4>Expense</h4>
      <p className="money minus">${expense}</p>
    </div>
  </div>
  );
}
