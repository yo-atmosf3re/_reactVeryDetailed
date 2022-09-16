import React, { useEffect, useState } from 'react'

function SetTimeoutExample() {
   const [text, setText] = useState('')
   console.log(text !== '' ? `Component rendered with: ${text}` : 'Component without text')
   useEffect(() => {
      const setTimeoutID = setTimeout(() => {
         console.log('TIMEOUT EXPIRED')
         setText('3 seconds passed')
      }, 3000);
      return () => {
         clearTimeout(setTimeoutID)
      }
   }, [text])

   return (<div>
      text: {text}
   </div>);
}

export default SetTimeoutExample;