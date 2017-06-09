function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + action.amount >= 0 ? state + action.amount : 0
    default:
      return state
  }
}

export default counter
