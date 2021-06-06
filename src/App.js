import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'

function App() {

  const account = useSelector((state) => state.account)

  console.log(account) // returns the state inside the store, at the beginning account: 0, or on line 7 do state => state.account for just 0 for example
    
  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  

  return (
    <div className="App">
      <h1>{account}</h1>
      <p>https://www.youtube.com/watch?v=9jULHSe41ls Redux tutorial</p>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  )
}

export default App;
