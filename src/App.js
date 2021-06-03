import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux'

function App() {

  const state = useSelector((state) => state)

  console.log(state) // returns the state inside the store, at the beginning account: 0, or on line 7 do state => state.account for just 0 for example
    

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
