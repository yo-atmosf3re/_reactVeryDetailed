import * as React from 'react';
import { useEffect, useState } from 'react';

function SetTimeoutExample() {
   const [time, setTime] = useState(new Date().toLocaleTimeString());
   const [date, setDate] = useState(new Date().toLocaleDateString());
   useEffect(() => {
      const interval = setInterval(() => {
         setTime(new Date().toLocaleTimeString());
         setDate(new Date().toLocaleDateString());
      }, 1000);
      return () => clearInterval(interval);
   }, []);
   return (
      <div className="clock">
         <p className="date">{date}</p>
         <p className="time">{time}</p>
      </div>
   );
}

export default SetTimeoutExample;