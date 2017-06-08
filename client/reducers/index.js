import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import game from './game'
import formPage from './formPage'

const reducers = {
  form: formReducer,
  // form reducer is mounted at form
  formPage: formPage,
  game:game
}

export default combineReducers(reducers)
