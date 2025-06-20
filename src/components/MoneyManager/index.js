import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [
      {
        title: 'Salary',
        amount: '50000',
        type: 'Income',
      },
    ],
  }
  render() {
    const {transactionList} = this.state
    return (
      <div>
        <div>
          <div>
            <h1> Hi, Richard </h1>
            <p>
              {' '}
              Welcome back to your
              <span> Money Manager </span>
            </p>
          </div>
          <MoneyDetails />
          <div>
            <form>
              <h1> Add Transaction</h1>
              <label htmlFor="title"> TITLE </label>
              <input type="text" id="title" placeholder="TITLE" />
              <label htmlFor="amount"> AMOUNT </label>
              <input type="text" id="amount" placeholder="AMOUNT" />
              <label htmlFor="select"> TYPE </label>
              <select id="select">
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add</button>
            </form>
            <div>
              <h1> History </h1>
              <div>
                <ul>
                  <li>
                    <p> Title </p>
                    <p> Amount </p>
                    <p> Type </p>
                  </li>
                  {transactionList.map(eachTransaction => (
                    <TransactionItem
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
