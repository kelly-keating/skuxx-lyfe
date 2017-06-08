import React from 'react'
import {connect} from 'react-redux'

import Form from '../components/Form'
import addPerson from '../actions/form'

class FormPage extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  submit = (values) => {
    this.props.dispatch(addPerson(values))
    console.log("bababa",values);
  }

  render(){
    return (
      <div>
        {!this.props.add_success && !this.props.add_finish && <Form onSubmit={this.submit} /> }
      </div>
    )
  }
}

function mapState2Props (state) {
  console.log(state)
  return {
    add_success: state.formPage.add_success,
    adding: state.formPage.adding,
    err: state.formPage.err
  }
}
export default connect(mapState2Props)(FormPage)
