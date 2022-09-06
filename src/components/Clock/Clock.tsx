import { number } from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';

const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

const Clock = () => {
   const [date, setDate] = useState(new Date())
   useEffect(() => {
      const intervalId = setInterval(() => {
         setDate(new Date())
      }, 1000);
      return () => {
         clearInterval(intervalId)
      }
   }, [])

   return (<div>
      <span>{get2digitsString(date.getHours())}</span>
      :
      <span>{get2digitsString(date.getMinutes())}</span>
      :
      <span>{get2digitsString(date.getSeconds())}</span>
   </div>);
}

export default Clock;