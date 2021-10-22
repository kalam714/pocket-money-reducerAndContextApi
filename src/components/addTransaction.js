import { React, useState, useContext } from "react";
import { GlobalContext } from '../Context/GlobalState';

export default function AddTransaction() {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const { addTransaction } = useContext(GlobalContext);
  const submitTransaction = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    setText('')
    setAmount(0)
    addTransaction(newTransaction);
  }
  return (
    <form onSubmit={submitTransaction}>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount <br /></label>
        <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="Enter amount..." />
      </div>
      <button class="btn">Add transaction</button>
    </form>
  )
}