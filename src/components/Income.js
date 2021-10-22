import React, { useContext } from "react";
import { GlobalContext } from '../Context/GlobalState';
export default function Income() {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const cost = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">BDT {income}</p>
      </div>
      <div>
        <h4>Cost</h4>
        <p className="money minus">BDT {cost}</p>
      </div>
    </div>

  )
}