import { Component } from 'react'
import './Coin.css'

export default class Coin extends Component {
  render() {
    return (
      <div className='Coin'>
        <img src={this.props.data.imgSrc} alt={this.props.data.side} />
      </div>
    )
  }
}
