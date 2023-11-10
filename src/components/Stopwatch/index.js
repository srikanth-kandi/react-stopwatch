import {Component} from 'react'
import './index.css'

const initialState = {
  minutes: 0,
  seconds: 0,
  isStopWatchRunning: false,
}

class Stopwatch extends Component {
  state = initialState

  getElapsedSecondsInTimeFormat = () => {
    const {minutes, seconds} = this.state
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  incrementTimeElapsedInSeconds = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0,
      }))
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
      }))
    }
  }

  resetWatch = () => {
    const {isStopWatchRunning} = this.state
    if (isStopWatchRunning) {
      clearInterval(this.intervalId)
      this.setState(initialState)
    } else {
      this.setState(initialState)
    }
  }

  stopWatch = () => {
    const {isStopWatchRunning} = this.state
    if (isStopWatchRunning) {
      clearInterval(this.intervalId)
      this.setState({isStopWatchRunning: false})
    }
  }

  startWatch = () => {
    const {isStopWatchRunning} = this.state
    if (isStopWatchRunning === false) {
      this.intervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
      this.setState({isStopWatchRunning: true})
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="shadow-container">
            <div className="timer-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch-img"
              />
              <p className="timer-desc">Timer</p>
            </div>
            <h1 className="timer">{this.getElapsedSecondsInTimeFormat()}</h1>
            <div className="btn-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.startWatch}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn"
                onClick={this.stopWatch}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn"
                onClick={this.resetWatch}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
