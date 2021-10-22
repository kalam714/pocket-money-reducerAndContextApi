import React, { useContext } from "react";
import { GlobalContext } from '../Context/GlobalState';

export default function Money() {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (

    <div>
      <h4>Your Total Money</h4>
      <h1>BDT {total}</h1>
    </div>
  )
}