import React from 'react'
import { ClockViewPropsType } from './Clock';

const AnalogClockView: React.FC<ClockViewPropsType> = ({ date }) => {
   return (
      <div className='clock'>
         <div className='analog-clock'>
            <div className='dial seconds'></div>
            <div className='dial minutes'></div>
            <div className='dial hours'></div>
         </div>
      </div>
   );
}

export default AnalogClockView;