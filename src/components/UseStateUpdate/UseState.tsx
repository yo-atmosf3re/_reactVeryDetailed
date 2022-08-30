import * as React from 'react';
import { useState } from 'react';

function generationData() {
   console.log('generateData')
   return 10;
}

function UseState() {
   console.log('Example')
   const changer = (state: number) => {
      debugger
      return state + 1;
   }
   const [counter, setCounter] = useState(generationData)
   return (<div>
      <button onClick={() => { setCounter(changer) }}>Increment</button>
      <button onClick={() => { setCounter(0) }}>Reset</button>
      <button onClick={() => { setCounter(counter - 1) }}>Decrement</button>
      <br />
      {counter}
      <br />
   </div>);
}

export default UseState;