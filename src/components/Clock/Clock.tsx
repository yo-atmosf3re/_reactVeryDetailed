import { number } from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';

type PropsType = {
   mode?: 'digital' | 'analog'
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

const Clock = (props: PropsType) => {
   const [date, setDate] = useState(new Date())
   useEffect(() => {
      const intervalId = setInterval(() => {
         setDate(new Date())
      }, 1000);
      return () => {
         clearInterval(intervalId)
      }
   }, [])

   let view;
   switch (props.mode) {
      case 'analog':
         view = <span>ANALOG</span>
         break;
      case 'digital':
      default:
         view = <>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
         </>
   }


   return (<div>
      {view}
   </div >);
}

export default Clock;