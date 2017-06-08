import React from 'react'
import {connect} from 'react-redux'

import Form from '../components/Form'
import addPerson from '../actions/form'
import AddSuccess from '../components/AddSuccess'

class FormPage extends React.Component {
  constructor(props) {
    super(props)
  }

  submit = (values) => {
    this.props.dispatch(addPerson(values))
  }

  delete = ()=>{
    alert('Tis gone!(not really I am still working on this feature)')
    this.props.history.push('/form')
    console.log("PINEAPPLE DELETE THIS PERSON");}

  personAdded = ()=>{
    alert('Cheers mate! Add another Skuxx!')
    this.props.history.push('/form')
  }

  render(){
    return (
      <div>
        {console.log(this.props)}
        {!this.props.add_success && !this.props.add_finish && <Form onSubmit={this.submit} /> }
        {!this.props.adding && this.props.add_success &&
        <AddSuccess
          newPerson={this.props.userInput} handleDelete={this.delete}
          handleSubmit={this.personAdded}/> }
      </div>
    )
  }
}

function mapState2Props (state) {
  console.log(state)
  return {
    add_success: state.formPage.add_success,
    adding: state.formPage.adding,
    err: state.formPage.err,
    userInput: state.formPage.userInput
  }
}
export default connect(mapState2Props)(FormPage)
