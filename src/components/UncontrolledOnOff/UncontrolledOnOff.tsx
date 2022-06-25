import * as React from 'react';
import s from 'UncontrolledOnOff.module.css'
import { useState } from 'react';

export type PropsType = {
   onChange: (on: boolean) => void
}

function UncontrolledOnOff(props: PropsType) {
   let [on, setOn] = useState(false);

   const onStyle = {
      width: '30px',
      height: '20px',
      border: '1px solid black',
      display: "inline-block",
      padding: '2px',
      backgroundColor: on ? 'green' : 'white',
   }
   const offStyle = {
      width: '30px',
      height: '20px',
      border: '1px solid black',
      display: "inline-block",
      marginLeft: '2px',
      padding: '2px',
      backgroundColor: on ? 'white' : 'red',
   }
   const indicatorStyle = {
      width: '10px',
      height: "10px",
      borderRadius: "5px",
      border: '1px solid black',
      display: "inline-block",
      marginLeft: '5px',
      backgroundColor: on ? 'green' : 'red',
   }

   let onClicked = () => {
      setOn(true)
      props.onChange(true)
   }
   let offClicked = () => {
      setOn(false)
      props.onChange(false)
   }

   return (
      <div>
         <div style={onStyle} onClick={onClicked}>On</div>
         <div style={offStyle} onClick={offClicked}>Off</div>
         <div style={indicatorStyle}></div>
      </div >
   );
}

export default UncontrolledOnOff;