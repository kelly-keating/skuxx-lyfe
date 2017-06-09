import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Form from '../components/Form'
import {addPerson} from '../actions/form'
import AddSuccess from '../components/AddSuccess'

class FormPage extends React.Component {
  constructor(props) {
    super(props)
  }

  submit = (values) => {
    this.props.dispatch(addPerson(values))
  }

  render(){
    return (
      <Router>
      <div>
        {console.log(this.props)}
        {!this.props.add_success && !this.props.add_finish && <Form onSubmit={this.submit} /> }
        {this.props.add_success && !this.props.add_finish &&
        <AddSuccess
          dispatch={this.props.dispatch}
          newPerson={this.props.userInput} />}
        {this.props.add_success && this.props.add_finish &&
        <Form onSubmit={this.submit} />}
      </div>
      </Router>
    )
  }
}

function mapState2Props (state) {
  return {
    add_success: state.formPage.add_success,
    adding: state.formPage.adding,
    err: state.formPage.err,
    userInput: state.formPage.userInput,
    add_finish: state.formPage.add_finish
  }
}
export default connect(mapState2Props)(FormPage)
