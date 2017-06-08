import React from 'react'
import {connect} from 'react-redux'

import Form from '../components/Form'
import addPerson from '../actions/form'

class FormPage extends React.Component {
  constructor(props) {
    super(props)
  }

  submit = (values) => {
    this.props.dispatch(addPerson())
    console.log("bababa",values);
  }

  render(){
    return (
      <div>
        <Form onSubmit={this.submit} />
      </div>
    )
  }
}

export default connect()(FormPage)
