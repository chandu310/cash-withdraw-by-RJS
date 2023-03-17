// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onDecrement = value => {
    this.setState(prevState => ({count: prevState.count - value}))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="second-container">
          <div className="head-container">
            <div className="s-logo">
              <h1 className="head">S</h1>
            </div>
            <h1 className="main-head">Sara Williams</h1>
          </div>
          <div className="balance-container">
            <p className="counter">Your Balance</p>
            <div>
              <p className="amount">{count}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="main-head">Withdraw</p>
          <p className="counter">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                amountItem={each}
                key={each.id}
                onDecrement={this.onDecrement}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
