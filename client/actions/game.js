import request from 'superagent'

export const receiveSkuxxes = (skuxxes) => {
  return {
    type: 'RECEIVE_SKUXXES',
    skuxxes
  }
}

export function getSkuxxes () {
  return (dispatch) => {
    request
      .get(`/api/v1/skuxx`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveSkuxxes(res.body))
      })
  }
}
