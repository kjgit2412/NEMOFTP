import { combineReducers } from 'redux'
import user from './user'
import config from './config'

const rootReducer = combineReducers({ user, config })

export default rootReducer
