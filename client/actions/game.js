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

export const incrementCounter = (imgNo, imageLevels) => {
  console.log("incrementing")
  let otherIdx = imgNo == 0 ? 1 : 0
  console.log({imgNo, otherIdx, imageLevels})
  return {
    type: 'INCREMENT_COUNTER',
    amount: imageLevels[imgNo] >= imageLevels[otherIdx] ? 1 : -1
  }
}
