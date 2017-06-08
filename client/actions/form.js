import fetch from 'isomorphic-fetch'
import request from 'superagent'

function addPersonRequest(){
  return{
    type: "ADD_PERSON_REQUEST"
  }
}

function addPersonSuccess(){
  return{
    type: "ADD_PERSON_SUCCESS"
  }
}

function addPersonFailure(err){
  return{
    type: "ADD_PERSON_FAILURE",
    err:err
  }
}

export default function addPerson(formInput){
  return dispatch =>{
    dispatch(addPersonRequest())
    request
      .post('/api/v1/skuxx')
      .send(formInput)
      .end((err,res)=>{
        if (err || !res.ok) {
          dispatch((addPersonFailure(err)));
        } else {
          alert('yay got' + JSON.stringify(res.body))
        }
      })
  }

}
