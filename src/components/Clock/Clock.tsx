import * as React from 'react';
import { useEffect, useState } from 'react';



const Clock = () => {
   const [date, setDate] = useState(new Date())
   useEffect(() => {
      setInterval(() => {
         setDate(new Date())
      }, 1000)
   }, [])

   return (<div>
      <span>{date.getHours()}</span>
      :
      <span>{date.getMinutes()}</span>
      :
      <span>{date.getSeconds()}</span>
   </div>);
}

export default Clock;