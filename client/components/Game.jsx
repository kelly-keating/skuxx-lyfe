
import React from 'react'
import {connect} from 'react-redux'

import {getSkuxxes, incrementCounter} from '../actions/game'

class Skuxxes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pairIndex: 0, skuxxes1: props.skuxxes1, skuxxes2: props.skuxxes2}
  }

componentDidMount() {
  this.props.dispatch(getSkuxxes())
}

selectSkuxx(e, imgNo, idx) { //deal with counter.
this.props.dispatch(incrementCounter(imgNo, [this.state.skuxxes1[idx].level, this.state.skuxxes2[idx].level]))
this.tickSkuxx()
}

renderSkuxx (skuxx, imgNo) {
  return <span>
    <img src={skuxx.img_url} name={imgNo} width='400' onClick={(e) => this.selectSkuxx(e, imgNo, this.state.pairIndex)}/>
  </span>
}

renderSkuxxes (idx) {
  return (
    <div>
      {this.renderSkuxx(this.state.skuxxes1[idx], 0)}
      {this.renderSkuxx(this.state.skuxxes2[idx], 1)}
    </div>
  )
}

componentWillReceiveProps (props) {
    let {skuxxes1, skuxxes2, counter} = props
    this.setState({skuxxes1, skuxxes2, counter})
}

tickSkuxx () {
  this.setState({pairIndex: this.state.pairIndex + 1})
}

render() {
  return (
    <div className="game">
      <div className='photos'>
        {this.state.skuxxes1.length > 0 ? this.renderSkuxxes(this.state.pairIndex) : ""}
      </div>
      <div id='counter'>
        { this.state.counter }
      </div>
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

  return {skuxxes1: shuffled, skuxxes2: shuffled2, counter: state.counter}

}

export default connect(mapStateToProps)(Skuxxes)
