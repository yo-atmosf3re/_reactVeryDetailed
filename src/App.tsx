import * as React from 'react';
import { useState } from 'react';
import { isPropertySignature } from 'typescript';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import UncontrolledInput, { ControlledCheckbox, ControlledInput, ControlledInputWithFixedValue, ControlledSelect, GetValueUncontrolledInput, TrackValueOfUncontrolledInput } from './components/input';
import OnOff from './components/OnOff/OnOff';
import { Rating, RatingValueType } from './components/Raiting/Raiting';
import UncontrolledAccordion from './components/SelfControlledAccordion/UncontrolledAccordion';
import { SelfControlledRating } from './components/SelfControlledRaiting/SelfControlledRaiting';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';


function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [swithOn, setSwitchOn] = useState<boolean>(false)


  return (
    <div className='App'>
      <UncontrolledInput />
      <br />
      <TrackValueOfUncontrolledInput />
      <br />
      <ControlledInputWithFixedValue />
      <br />
      <GetValueUncontrolledInput />
      <br />
      <ControlledInput />
      <br />
      <ControlledCheckbox />
      <br />
      <ControlledSelect />
      {/* <OnOff on={swithOn} onChange={setSwitchOn} /> */}
      {/* <UncontrolledAccordion titleValue='-- Menu --' />
      <UncontrolledAccordion titleValue='-- User --' /> */}
      <br />
      {/* <SelfControlledRating onChange={ } /> */}
      {/* <br />
      <Accordion titleValue='-- Settings --' collapsed={accordionCollapsed} onClick={setAccordionCollapsed} />
      <UncontrolledOnOff onChange={setSwitchOn} /> {swithOn.toString()} */}

      {/* <Rating value={ratingValue} onClick={setRatingValue} /> */}

      {/* <Rating value={3} /> */}
      {/* <Accordion titleValue='Menu!' collapsed={true} />
      <Accordion titleValue='User' collapsed={false} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={4} />
      <Rating value={5} /> */}
      {/* <SelfControlledRating onChange={ } /> */}
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
