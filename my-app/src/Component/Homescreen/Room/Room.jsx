import React from "react";
import { CiTempHigh } from "react-icons/ci";
import "./Room.css";

const rooms = [
    { id: 1, temp: -1 },
    { id: 2, temp: 1 },
    { id: 3, temp: 12 },
    { id: 4, temp: -2 },
    { id: 5, temp: -5 },
    { id: 6, temp: -7 },
    { id: 7, temp: 11 },
    { id: 8, temp: 4 },
];

const Room = () => {
    return (
        <div className="room-container">
            <div className="rooms-headers">Rooms</div>
            <div className="rooms-grid">
                {rooms.map((room) => (
                    <div key={room.id} className="room-card">
                        <h3>Room #{room.id}</h3>
                        <div className="temperature-cricle">
                            <div className="temperature-widget">
                              <div className="room-info">
                              <h2 className="temp">{room.temp}°C</h2>
                                <p>Temperature</p>
                              </div>
                                <span className="icons"><CiTempHigh size={40} /></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Room;
