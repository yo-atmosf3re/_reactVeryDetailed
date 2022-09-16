import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Clock from './components/Clock/Clock';
import UseEffectCleanup from './components/useEffectCleanup/useEffectCleanup';


function App() {
  return (
    <div>
      <UseEffectCleanup />
    </div>
  );
}

export default App;
