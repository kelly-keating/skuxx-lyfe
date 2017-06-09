import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Form from '../components/Form'
import {addPerson, addFinish, deletePerson} from '../actions/form'
import AddSuccess from '../components/AddSuccess'

class FormPage extends React.Component {
  constructor(props) {
    super(props)
    this.detele=this.delete.bind(this)
    this.personAdded=this.personAdded.bind(this)
  }

  submit = (values) => {
    this.props.dispatch(addPerson(values))
  }

  delete = (name)=>{
    alert('Tis gone!(not really I am still working on this feature)')
    this.props.dispatch(deletePerson(name))
    // this.props.dispatch(deletePerson(name))
  }

  personAdded = ()=>{
    alert('Cheers mate! Add another Skuxx!')
    this.props.dispatch(addFinish())
    //to redirect to form page
  }

  render(){
    return (
      <Router>
      <div>
        {console.log(this.props)}
        {!this.props.add_success && !this.props.add_finish && <Form onSubmit={this.submit} /> }
        {this.props.add_success && !this.props.add_finish &&
        <AddSuccess
          newPerson={this.props.userInput} handleDelete={this.delete}
          handleSubmit={this.personAdded}/> }
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
