import React, {useEffect, useState} from "react";
import "./Time.css";

export const Time = () => {
    const currDay = new Date().toLocaleDateString();
    const [currentDate, setCurrentDate] = useState(currDay);

    const [time, setTime] = useState(new Date());

    const formatTime = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        if (String(hours).length < 2) {
            hours = `0${hours}`;
        };
        if (String(minutes).length < 2) {
            minutes = `0${minutes}`;
        }
        return [hours, minutes].join(":");
    };

    useEffect(() => {
        setCurrentDate(currDay);
    }, [currDay]);

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timeInterval);
    }, []);

    return (
        <div className="container-small">
            <div className="inner">
                <div className="clock">{formatTime()}</div>
                <div className="date">{currentDate}</div>
            </div>
        </div>
    );
};