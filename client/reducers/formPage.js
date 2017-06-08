const initialState = {
  adding:false,
  add_success:false,
  err:null,
  userInput:null
}

function formPage (state=initialState, action){
  switch (action.type) {
    case "ADD_PERSON_REQUEST":
      return {
        adding:true,
        add_success: false,
        err: null,
        userInput:null
      }
    case "ADD_PERSON_SUCCESS":
      return {
        adding:false,
        add_success:true,
        err: null,
        userInput:action.userInput
      }
    case "ADD_PERSON_FAILURE":
      return {
        adding: false,
        add_success: false,
        err:action.err,
        userInput:action.userInput
      }
    default:
      return state
  }
}
export default formPage
