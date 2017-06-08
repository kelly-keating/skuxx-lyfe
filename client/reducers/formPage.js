const initialState = {
  adding:false,
  add_finish:false,
  err:null
}

function formPage (state=initialState, action){
  switch (action.type) {
    case "ADD_PERSON_REQUEST":
      return {
        ...state,
        adding:true
      }
    case "ADD_PERSON_SUCCESS":
      return {
        ...state,
        adding:false,
        add_finish:true
      }
    case "ADD_PERSON_FAILURE":
      return {
        ...state,
        err:action.err
      }
    default:
      return state
  }
}
export default formPage
