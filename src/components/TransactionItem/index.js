// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionDetails} = props
  const {title, amount, type} = transactionDetails
  return (
    <li>
      <p> {title} </p>
      <p> Rs {amount} </p>
      <p> {type} </p>
      <div type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </div>
    </li>
  )
}

export default TransactionItem
