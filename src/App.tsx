
import * as React from 'react';
import { StepButton } from 'material-ui/Stepper';
import { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import SelectTown, { ItemsType, ItemType } from './components/Select/Select';
import UncontrolledAccordion from './components/SelfControlledAccordion/UncontrolledAccordion';

function App() {
  let itemsAc = [
    { title: 'Alex', value: 1, }, { title: 'Dima', value: 2, }, { title: 'Misha', value: 3, }, { title: 'Lena', value: 4, },
  ]
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  return (
    <div className='App'>
      <UncontrolledAccordion titleValue='--Users--' />
    </div>
  );
}

export default App;
