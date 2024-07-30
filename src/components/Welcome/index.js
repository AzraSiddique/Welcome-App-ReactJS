import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribe: true}

  subscribe = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  subscribed = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  render() {
    const {subscribe} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>

        <p className="para">Thank you! Happy Learning</p>

        {subscribe ? (
          <button type="button" className="btn" onClick={this.subscribe}>
            Subscribe
          </button>
        ) : (
          <button type="button" className="btn" onClick={this.subscribed}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
