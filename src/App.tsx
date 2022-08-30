import * as React from 'react';
import { useState } from 'react';
import './App.css';
import { LikeUseCallback, UseMemoFactorialCounter } from './components/LikeUseCallback';
import Select, { ItemsType } from './components/Select/Select';
import UseState from './components/UseStateUpdate/UseState';

function App() {

  return (
    <div className='App'>
      {/* <UseMemoFactorialCounter /> */}
      <UseState />
    </div>
  );
}

export default App;
