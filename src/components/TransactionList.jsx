import React, { useState } from 'react'
import TransactionItem from './TransactionItem'

function TransactionList({ transactions, onDelete }) {

  const [typeFilter, setTypeFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('newest')

  // Get categories from transactions
  const categories = [
    ...new Set(
      transactions.map(transaction => transaction.category)
    )
  ]

  // Filter transactions
  const filteredTransactions = transactions.filter(transaction => {
  const matchesType =
    typeFilter === 'all' ||
    transaction.type === typeFilter

  const matchesCategory =
    categoryFilter === 'all' ||
    transaction.category === categoryFilter

  return matchesType && matchesCategory
})

  // Sort transactions
  filteredTransactions.sort((a, b) => {

    if (sortOrder === 'newest') {
      return b.id - a.id
    }

    return a.id - b.id
  })

  return (
    <section className="list-section">

      <h2>Transactions</h2>

      {/* Filters */}
      <div className="filters">

        <div>
          <label>Type</label>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>


        <div>
          <label>Category</label>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>

            {categories.map(category => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}

          </select>
        </div>


        <div>
          <label>Sort</label>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

      </div>


      {/* Transactions */}
      {filteredTransactions.length === 0 ? (

        <p className="empty">
          No transactions found.
        </p>

      ) : (

        <div>

          {filteredTransactions.map(transaction => (

            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
            />

          ))}

        </div>

      )}

    </section>
  )
}

export default TransactionList