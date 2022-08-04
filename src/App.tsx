
import * as React from 'react';
import { StepButton } from 'material-ui/Stepper';
import { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
// import Accordion from './components/Accordion/Accordion';
import SelectTown from './components/Select/Select';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion/Accordion';


function App() {
  let itemsAc = [
    { title: 'Alex', value: 1, }, { title: 'Dima', value: 2, }, { title: 'Misha', value: 3, }, { title: 'Lena', value: 4, },
  ]
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let onClickLiHandler = (id: any) => {
    alert(`user with ID ${id} should be happy!`)
  }


  let [collapsed, setCollapsed] = useState<boolean>(true)
  let [titleTown, setTitleTown] = useState('Select town')
  let changeValueSelect = () => alert('select')
  const items = [
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

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <div>{props.title}</div>
}

export default App;
