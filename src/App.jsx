import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions')

    return savedTransactions
      ? JSON.parse(savedTransactions)
      : []
  })

  useEffect(() => {
    localStorage.setItem(
      'transactions',
      JSON.stringify(transactions)
    )
  }, [transactions])

  const addTransaction = (transaction) => {
    setTransactions((oldTransactions) => [
      ...oldTransactions,
      transaction
    ])
  }

  const deleteTransaction = (id) => {
    setTransactions((oldTransactions) =>
      oldTransactions.filter(
        (transaction) => transaction.id !== id
      )
    )
  }

  return (
    <div className="app">

      <Header />

      <main className="container">

        <Balance transactions={transactions} />

        <TransactionForm
          onAddTransaction={addTransaction}
        />

        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
        />

      </main>

    </div>
  )
}

export default App