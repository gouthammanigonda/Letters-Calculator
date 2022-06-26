// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onChangeInputEle = event => {
    this.setState({
      input: event.target.value,
    })
  }

  render() {
    const {input} = this.state

    return (
      <div className="main-container">
        <div className="flex-container">
          <div className="container1">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="text">
                Enter the phrase
              </label>
              <input
                className="input"
                type="text"
                id="text"
                placeholder="calculator"
                onChange={this.onChangeInputEle}
              />
            </div>

            <div className="result-container">
              <p className="para">No.of letters: {input.length}</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
