import * as React from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import WatchWithArrows from './components/WatchWithArrows/WatchWithArrows';


function App() {

  return (
    <div>
      <Clock mode='digital' />
      <>
        <button onClick={() => {

        }}>switch</button>
      </>
    </div>
  );
}

export default App;
