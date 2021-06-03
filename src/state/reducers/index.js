import {combineReducers} from 'redux'
import accountReducer from './accountReducer'

const reducers = combineReducers({
    // takes an object of all reducers we want to combine
    account: accountReducer
})

export default reducers