// Write your code here

import './index.css'

const MoneyDetails = () => {
  return (
    <div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <h1> Your Balance </h1>
          <p> Rs {0} </p>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <h1> Your Income </h1>
          <p> Rs {0} </p>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <h1> Your Expenses </h1>
          <p> Rs {0} </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
