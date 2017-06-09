const initialState = {
  adding:false,
  add_success:false,
  err:null,
  userInput:null,
  add_finish:false
}

function formPage (state=initialState, action){
  switch (action.type) {
    case "ADD_PERSON_REQUEST":
      return {
        ...state,
        adding:true,
      }
    case "ADD_PERSON_SUCCESS":
      return {
        ...state,
        adding:false,
        add_success:true,
        err: null,
        userInput:action.userInput
      }
    case "ADD_PERSON_FAILURE":
      return {
        ...state,
        adding: false,
        add_success: false,
        err:action.err,
        userInput:action.userInput
      }
    case "ADD_PERSON_FINISH":
      return {
        ...state,
        add_finish: true
      }
    default:
      return state
  }
}
export default formPage
