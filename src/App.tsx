
import * as React from 'react';
import { StepButton } from 'material-ui/Stepper';
import { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import SelectTown, { ItemsType, ItemType } from './components/Select/Select';

function App() {
  let itemsAc = [
    { title: 'Alex', value: 1, }, { title: 'Dima', value: 2, }, { title: 'Misha', value: 3, }, { title: 'Lena', value: 4, },
  ]
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  let [collapsed, setCollapsed] = useState<boolean>(true)
  let [titleTown, setTitleTown] = useState('Select town')
  const items: ItemsType = [
    {
      title: 'Moscow',
      value: 1
    },
    {
      title: 'Minsk',
      value: 2
    },
    {
      title: 'Kiev',
      value: 3
    },
  ]


  return (
    <div className='App'>
      <SelectTown setTitleTown={setTitleTown} titleTown={titleTown} items={items} collapsed={collapsed} setCollapsed={setCollapsed} />


      {/* <Accordion items={itemsAc} titleValue='Users' collapsed={accordionCollapsed} onClick={setAccordionCollapsed} OnClickLiHandler={onClickLiHandler} /> */}
    </div>
  );
}

export default App;
