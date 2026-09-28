import React from 'react'
function Balance({ transactions }) {
  const income = transactions
    .filter(transaction => transaction.type === 'income')
    .reduce((total, transaction) => total + Number(transaction.amount), 0)

  const expenses = transactions
    .filter(transaction => transaction.type === 'expense')
    .reduce((total, transaction) => total + Number(transaction.amount), 0)

  const balance = income - expenses

  return (
    <section className="summary">
      <div className="summary-card">
        <span>Balance</span>
        <strong>Rs. {balance.toFixed(2)}</strong>
      </div>

      <div className="summary-card">
        <span>Income</span>
        <strong>Rs. {income.toFixed(2)}</strong>
      </div>

      <div className="summary-card">
        <span>Expenses</span>
        <strong>Rs. {expenses.toFixed(2)}</strong>
      </div>
    </section>
  )
}

export default Balance