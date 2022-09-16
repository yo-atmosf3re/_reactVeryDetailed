import { useCallback, useEffect, useState } from "react";

function KeysTrackerExample() {
   const [text, setText] = useState('')
   console.log(text !== '' ? `Component rendered with: ${text}` : 'Component without text')
   useEffect(() => {
      const handler = (e: KeyboardEvent) => {
         console.log(e.key)
         setText((state) => state + e.key)
      }
      window.document.addEventListener('keypress', handler)
      return () => window.removeEventListener('keypress', handler)
   }, [])

   return (<div>
      Typed text: {text}
   </div>);
}

export default KeysTrackerExample;