import React from 'react'
import './Temperature.css'

function Temperature() {
  return (
   <>
    <h2 className="temperature-header">Occupied</h2>
    <div className="circle-container">
        <div className="circle">
          <div className="circle-content">
            <h1>12°C</h1>
            <p>Temperature</p>
          </div>
        </div>
      </div>

      <div className="room-container">
        <div className="card-container">
          <h2 className="room-title">Room #2</h2>
          <p className="room-id">ID: 12057</p>
          <div className="info-section">
            <div className="info-item">
              <span>Temperature:</span>
              <span>-5°C</span>
            </div>
            <hr />
            <div className="info-item">
              <span>Set Alarm:</span>
              <span>-9°C</span>
            </div>
          </div>
        </div>

        <div className="card-container">
          <h2 className="room-title">Room #1</h2>
          <p className="room-id">ID: 12056</p>
          <div className="info-section">
            <div className="info-item">
              <span>Temperature:</span>
              <span>-1°C</span>
            </div>
            <hr />
            <div className="info-item">
              <span>Set Alarm:</span>
              <span>-5°C</span>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Temperature