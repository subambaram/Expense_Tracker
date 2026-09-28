import { useState } from 'react'
import React from 'react'

function TransactionForm({ onAddTransaction }) {
  const [type, setType] = useState('expense')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!amount || !category || !description) {
      return
    }

    const newTransaction = {
      id: Date.now(),
      type,
      amount,
      category,
      description,
      date: new Date().toLocaleDateString()
    }

    onAddTransaction(newTransaction)

    setAmount('')
    setCategory('')
    setDescription('')
  }

  return (
    <section className="form-section">
      <h2>Add Transaction</h2>

      <form onSubmit={handleSubmit}>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Food, Salary"
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />

        <button type="submit">Add Transaction</button>
      </form>
    </section>
  )
}

export default TransactionForm