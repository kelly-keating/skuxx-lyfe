import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import formPage from './formPage'

const reducers = {
  form: formReducer,
  // form reducer is mounted at form
  formPage: formPage
}

export default combineReducers(reducers)
