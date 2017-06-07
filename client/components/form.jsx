import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class Form extends Component {
  render(){
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <Field name="name" component="input" type="text"/>
        </div>
            <label htmlFor="image">Image</label>
            <Field name="image" component="input" type="url"/>

      </form>
    )
  }
}
