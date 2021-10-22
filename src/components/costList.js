import React, { useContext } from "react";
import { GlobalContext } from '../Context/GlobalState';
import Cost from "./Cost";

export default function CostList() {
    const { transactions } = useContext(GlobalContext)

    return (
        <div>
            <h3>Cost List</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (<Cost key={transaction.id} transaction={transaction} />))}



            </ul>
        </div>
    )
}