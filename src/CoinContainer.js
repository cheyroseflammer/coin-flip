import { Component } from 'react'
import Coin from './Coin.js'
import { choice } from './helper'

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'head', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      {
        side: 'tail',
        imgSrc:
          'https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091?k=6&m=476142091&s=612x612&w=0&h=NAjwxTraPyIxDKcgPwv2PYPKamnl7GGXklMbRtHjENA=',
      },
    ],
  }

  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    const newCoin = choice(this.props.coins)

    this.setState((st) => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'head' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tail' ? 1 : 0),
      }
    })
  }

  handleClick(e) {
    this.flipCoin()
  }

  render() {
    return (
      <div className='CoinContainer'>
        <h2>Let's Flip A Coin</h2>
        <button onClick={this.handleClick}>Flip Me!</button>
        {this.state.currCoin && <Coin data={this.state.currCoin} />}
        <p>
          Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{' '}
          heads, and {this.state.nTails} tails.{' '}
        </p>
      </div>
    )
  }
}

export default CoinContainer
