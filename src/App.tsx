import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import KeysTrackerExample from './components/useEffectCleanup/KeysTrackerExample';
import SetTimeoutExample from './components/useEffectCleanup/SetTimeoutExample';
import UseEffectCleanup from './components/useEffectCleanup/useEffectCleanup';


function App() {
  return (
    <div>
      <SetTimeoutExample />
    </div>
  );
}

export default App;
