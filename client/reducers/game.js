function skuxxes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_SKUXXES':
      return [...action.skuxxes]
    default:
      return state
  }
}

export default skuxxes
