import { CombineReducers, combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
  auth: authReducer
})
