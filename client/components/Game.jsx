
import React from 'react'
import {connect} from 'react-redux'

import {getSkuxxes} from '../actions/game'

class Skuxxes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pairIndex: 0, skuxxes1: props.skuxxes1, skuxxes2: props.skuxxes2}
  }

componentDidMount() {
  this.props.dispatch(getSkuxxes())
}

selectSkuxx() { //deal with counter.
  
this.tickSkuxx()
}

renderSkuxx (skuxx) {
  return <span>
    <img src={skuxx.img_url} width = '400' onClick={() => this.selectSkuxx()}/>
  </span>
}

renderSkuxxes (idx) {
  return (
    <div>
      {this.renderSkuxx(this.state.skuxxes1[idx])}
      {this.renderSkuxx(this.state.skuxxes2[idx])}
    </div>
  )
}

componentWillReceiveProps (props) {
    let {skuxxes1, skuxxes2} = props
    this.setState({skuxxes1, skuxxes2})
}

tickSkuxx () {
  this.setState({pairIndex: this.state.pairIndex + 1})
}

render() {
  return (
    <div>
      {this.state.skuxxes1.length > 0 ? this.renderSkuxxes(this.state.pairIndex) : ""}
    </div>

    )
  }
}


const mapStateToProps = (state) => {
  function sattoloCycle(arr) {
    var items = arr.slice()
    for (var i = items.length - 1; i >= 1; i--) {
      var j = Math.floor(Math.random() * i)
      var tmp = items[i]
      items[i] = items[j]
      items[j] = tmp
    }
    return items
  }

  var shuffled = sattoloCycle(state.game)
  var shuffled2 = sattoloCycle(shuffled)

  return {skuxxes1: shuffled, skuxxes2: shuffled2}

}

export default connect(mapStateToProps)(Skuxxes)
