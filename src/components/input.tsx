import * as React from 'react';
import { ChangeEvent, useRef, useState } from 'react';

const redBorder = {
   border: '2px solid red',
   margin: '5px 0 0 0',
}
const blueBorder = {
   border: '2px solid blue',
   margin: '5px 0 0 0',
}
const greenBorder = {
   border: '2px solid green',
   margin: '5px 0 0 0',
}
const purpleBorder = {
   'border': '2px solid purple',
   'margin': '5px 0 0 0',
}

function UncontrolledInput() {
   return (
      <input style={blueBorder} />
   );
}

export function GetValueUncontrolledInput() {
   let [value, setValue] = useState('')
   const inputRef = useRef<HTMLInputElement>(null);
   let setValueInput = () => {
      const el = inputRef.current as HTMLInputElement;
      setValue(el.value)
   }

   return (
      <>
         <input ref={inputRef} style={purpleBorder} />
         <button onClick={setValueInput}>Save</button>
         - actual value: {value}
      </>
   );
}

export function TrackValueOfUncontrolledInput() {
   const [value, setValue] = useState('')
   let changeValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let changedValue = e.currentTarget.value;
      setValue(changedValue)
   }
   return (
      <><input value={value} style={redBorder} onChange={changeValueInputHandler} /> - {value}</>
   );
}

export function ControlledInputWithFixedValue() {
   return (
      <input value={'hello'} style={greenBorder} />
   );
}

export default UncontrolledInput;