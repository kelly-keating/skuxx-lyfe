import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

const reducers = {
  form: formReducer
  // form reducer is mounted at form
}

export default combineReducers(reducers)
