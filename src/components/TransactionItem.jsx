import React from 'react'
function TransactionItem({ transaction, onDelete }) {
  return (
    <div className="transaction">
      <div>
        <h3>{transaction.category}</h3>
        <p>{transaction.description}</p>
        <small>{transaction.date}</small>
      </div>

      <div className="transaction-right">
        <strong className={transaction.type}>
          {transaction.type === 'income' ? '+' : '-'} Rs. {transaction.amount}
        </strong>
        <button onClick={() => onDelete(transaction.id)}>Delete</button>
      </div>
    </div>
  )
}

export default TransactionItem