import * as React from 'react';
import { useEffect, useState } from 'react';

function UseEffect() {
   console.log('Example')
   const [counter, setCounter] = useState(0)
   const [fake, setFake] = useState(0)
   useEffect(() => {
      console.log('Use effect every render')
      document.title = counter.toString()
   })
   useEffect(() => {
      console.log('Use effect only first render')
      document.title = counter.toString()
   }, [])
   useEffect(() => {
      console.log('Use effect first render and every dependencies changed')
      document.title = counter.toString()
   }, [counter])
   return (<div>
      <button onClick={() => { setCounter(counter + 1) }}>Increment</button>
      <button onClick={() => { setCounter(0) }}>Reset</button>
      <button onClick={() => { setFake(fake - 1) }}>Decrement</button>
      <br />
      Hello, out account {counter}
      <br />
   </div>);
}

export default UseEffect;