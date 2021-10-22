import React, { useContext } from "react";
import { GlobalContext } from '../Context/GlobalState';
export default function Cost({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}> {transaction.text} <span>BDT {sign} {Math.abs(transaction.amount)}</span>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}