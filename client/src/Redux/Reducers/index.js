import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import CarReducer from './CarReducer'
import CommandeReducer from './CommandeReducer'

const rootReducer = combineReducers({AuthReducer,ErrorReducer,CarReducer,CommandeReducer})

export default rootReducer