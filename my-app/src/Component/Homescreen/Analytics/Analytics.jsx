import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { IoMdAnalytics } from "react-icons/io";
import './Analytics.css'

const data = [
  { time: "0hr", value: 2, value2: 3, value3: 6, value4: 9, value5: 12 },
  { time: "1hr", value: 5, value2: 8, value3: 10, value4: 14, value5: 16 },
  { time: "2hr", value: 7, value2: 11, value3: 14, value4: 18, value5: 21 },
  { time: "3hr", value: 8, value2: 13, value3: 16, value4: 22, value5: 25 },
  { time: "4hr", value: 11, value2: 16, value3: 20, value4: 26, value5: 30 },
  { time: "5hr", value: 13, value2: 18, value3: 24, value4: 29, value5: 35 },
];

const rooms = [
  { name: "Room #1", temp: -2 },
  { name: "Room #2", temp: -15 },
  { name: "Room #3", temp: 10 },
  { name: "Room #4", temp: 20 },
  { name: "Room #5", temp: -4 },
];

function Analytics() {
  const [activeRange, setActiveRange] = useState("Weeks");

  return (
    <div className="dashboard-containers">
      <div className="Analytics">Analytics</div>

      <div className="chart-containers">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="1" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#5a7ea5" strokeWidth={4} />
            <Line type="monotone" dataKey="value2" stroke="#5a7ea5" strokeWidth={4} />
            <Line type="monotone" dataKey="value3" stroke="#5a7ea5" strokeWidth={4} />
            <Line type="monotone" dataKey="value4" stroke="#5a7ea5" strokeWidth={4} />
            <Line type="monotone" dataKey="value5" stroke="#5a7ea5" strokeWidth={4} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="button-groups">
        {["Days", "Weeks", "Months"].map((range) => (
          <button
            key={range}
            className={activeRange === range ? "active" : ""}
            onClick={() => setActiveRange(range)}
          >
            {range}
          </button>
        ))}
      </div>

      <div className="carder">
        <h2 className="titleder">Average Temperature</h2>
        {rooms.map((room, index) => (
          <div key={index} className="roomder">
            <div className="roomder-infos">
              <IoMdAnalytics className="iconder" />
              <span>{room.name}</span>
            </div>
            <span
              className="temperaturetion"
              style={{
                color: room.temp > 19 ? '#FF4500' : room.temp < -10 ? '#1E90FF' : '#5a7ea5'
              }}
            >
              {room.temp}°C
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
