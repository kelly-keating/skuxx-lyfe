import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'


class EndPage extends React.Component {
  render() {
    return (
      <div className='homeButt'>
        Your SKUXX level is { this.props.counter }<br />
      <Link to="/">Return Home</Link>
      </div>
    )
  }
}


function MapState2Props (state) {
  return {counter: state.counter}
}

export default connect(MapState2Props)(EndPage)
