import { useCallback, useEffect, useState } from "react";

function UseEffectCleanup() {
   const [counter, setCounter] = useState(1)
   console.log('Component rendered with:' + counter)
   useEffect(() => {
      console.log('Effect occurreted:' + counter)
      return () => console.log('RESET EFFECT:' + counter)
   }, [counter])
   const increaseHandler = useCallback(() => setCounter(counter + 1), [counter])
   return (<div>
      Hello, counter: {counter} <button onClick={increaseHandler}>+</button>
   </div>);
}

export default UseEffectCleanup;