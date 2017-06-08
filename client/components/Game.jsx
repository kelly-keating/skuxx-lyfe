
import React from 'react'
import {connect} from 'react-redux'

import {getSkuxxes} from '../actions/game'

const renderSkuxx = (skuxx, key) => (
  <img src={skuxx.img_url}/>
)

const Skuxxes = ({skuxxes, dispatch}) => (
  <div>
    <button onClick={() => dispatch(getSkuxxes())}>Show Skuxxes</button>
    {skuxxes.map(renderSkuxx)}
  </div>
)

const mapStateToProps = (state) => {
return {skuxxes: state.skuxxes}

}

export default connect(mapStateToProps)(Skuxxes)
