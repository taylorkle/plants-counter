import React, {CSSProperties} from 'react'

const ProgressBar = ({plantNumber, plantGoal}) => {

  let progress = 0
  let ideal = 0
  if (plantNumber) {
    progress = (plantNumber / plantGoal * 100).toFixed(0)
    ideal = (plantNumber / 30 * 100).toFixed(0)
  }

  const styleProgress = {
    width: Math.min(progress, 100) + "%"
  }

  const styleIdeal = {
    width: Math.min(ideal, 100) + "%"
  }

  return(
    <div className="progress-display">
      <div className="progress-bar-container">
        <div className="progress-bar-outer">
          <div className="progress-bar-inner" style={styleProgress}>
            <p className="progress-percentage">{progress}%</p>
          </div>
        </div>
        <p className="progress-message">Progress towards your goal</p>
      </div>
          <div className="progress-bar-container">
          <div className="progress-bar-outer">
            <div className="progress-bar-inner" style={styleIdeal}>
              <p className="progress-percentage">{ideal}%</p>
            </div>
          </div>
          <p className="progress-message">Progress towards 30 plants</p>
        </div>
      </div>
  )
}

export default ProgressBar