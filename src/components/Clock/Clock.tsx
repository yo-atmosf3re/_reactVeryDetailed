import { number } from 'prop-types';
import * as React from 'react';
import { useEffect, useState } from 'react';
import AnalogClockView from './AnalogClockView';
import DigitalClockView from './DigitalClockView';

export type ClockViewPropsType = {
   date: Date
}

type PropsType = {
   mode?: 'digital' | 'analog'
}

export const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

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
         view = <AnalogClockView date={date} />
         break;
      case 'digital':
      default:
         view = <DigitalClockView date={date} />
   }


   return (<div>
      {view}
   </div >);
}

export default Clock;