import request from 'superagent'

function addPersonRequest(){
  return{
    type: "ADD_PERSON_REQUEST"
  }
}

function addPersonSuccess(userInput){
  return{
    type: "ADD_PERSON_SUCCESS",
    userInput
  }
}

function addPersonFailure(err){
  return{
    type: "ADD_PERSON_FAILURE",
    err:err
  }
}

function addPerson(formInput){
  return dispatch =>{
    dispatch(addPersonRequest())
    request
      .post('/api/v1/skuxx')
      .send(formInput)
      .end((err,res)=>{
        if (err || !res.ok) {
          dispatch((addPersonFailure(err)))
        } else {
          dispatch((addPersonSuccess(formInput)))
        }
      })
  }
}

function addFinish(){
  return{
    type: "ADD_PERSON_FINISH"
  }
}

function deletePersonFailure(err){
  return{
    type: "DELETE_PERSON_FAILURE"
  }
}

function deletePersonSuccess(name){
  return{
    type: "DELETE_PERSON_SUCCESS",
    personDeleted:name
  }
}


function deletePerson(name){
  return dispatch => {
    dispatch(addFinish())
    //redirect to form page
    request
      .post('/api/v1/skuxx/delete')
      .send(name)
      .end((err,res)=>{
        if (err || !res.ok) {
          dispatch((deletePersonFailure(err)))
        } else {
          dispatch((deletePersonSucsess(name)))
        }
      })
  }
}

module.exports = {
  addPerson,
  addFinish,
  deletePerson
}
