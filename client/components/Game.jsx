
import React from 'react'
import {connect} from 'react-redux'

import {getSkuxxes} from '../actions/game'

const renderSkuxx = (skuxx) => (
  <img key={skuxx.id} src={skuxx.img_url}/>
)

const Skuxxes = ({skuxxes, dispatch}) => {
  return (
  <div>
    <button onClick={() => dispatch(getSkuxxes())}>Show Skuxxes</button>
    {skuxxes.map(renderSkuxx)}
  </div>
)}

const mapStateToProps = (state) => {
return {skuxxes: state.game}

}

export default connect(mapStateToProps)(Skuxxes)
