// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amountItem, onDecrement} = props
  const {value} = amountItem
  const onDelete = () => {
    onDecrement(value)
  }
  return (
    <li className="list-item">
      <button onClick={onDelete} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
