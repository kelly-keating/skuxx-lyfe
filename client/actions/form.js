import fetch from 'isomorphic-fetch'

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

export function addPerson(formInput){
  return dispatch =>{
    dispatch(addPersonRequest())
    return fetch('/api/v1/skuxx',
    {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formInput)
    })
      .then(()=> dispatch(addPersonSuccess()))
      .catch(ex => dispatch(addPersonFailure(ex)))
  }
}
