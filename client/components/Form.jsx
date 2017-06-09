import React from 'react';
import {Field, reduxForm} from 'redux-form';

const Form = props => {
  const {handleSubmit, pristine, reset, submitting} = props
  return(
    <div className="form-page">
      <p id="form-title">Add A Skuxx</p>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <div>
            <Field className="input-box"
              name="name"
              component="input"
              type="text"
              placeholder="Tony Stark"
            />
          </div>
        </div>
        <div>
            <label>Image</label>
            <div>
              <Field className="input-box"
                name="img_url"
                component="input"
                type="url"
                placeholder="https://images-na.ssl-images-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_UX214_CR0,0,214,317_AL_.jpg"
              />
            </div>
        </div>
        <div>
          <label>Skuxx Level</label>
          <div>
              <Field className="input-box"
                name="level"
                component="select"
                >
                  {Array(10).fill(0).map((el, i) => {
                    return <option key={i} value={i + 1}>{i + 1}</option>
                    })
                  }
              </Field>
          </div>
        </div>
        <div>
            <button className="button" type="submit" disabled={pristine || submitting}>Submit</button>
            <button className="button" type="button" disabled={pristine || submitting} onClick={reset}>Clear All</button>
        </div>
      </form>
    </div>
  )
}


export default reduxForm({ form:'add_a_person'})(Form)
