import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';


function App() {

  const [sw, setSw] = useState(false)
  const onClickHandler = () => {
    setSw(!sw)
  }

  return (
    <div>
      <Clock mode='analog' />
      <>

      </>
    </div>
  );
}

export default App;
