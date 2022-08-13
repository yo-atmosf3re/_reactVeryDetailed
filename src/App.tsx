import * as React from 'react';
import './App.css';
import { Example } from './components/UseMemo';
import { UseMemoFactorialCounter } from './components/UseMemo';

function App() {
  return (
    <div className='App'>
      {/* <UseMemoFactorialCounter /> */}
      <Example />
    </div>
  );
}

export default App;
