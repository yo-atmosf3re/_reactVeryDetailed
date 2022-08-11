import { useReducer, useState } from "react";

export type UncontrolledAccordionPropsType = {
   titleValue: string
}

type ActionType = {
   type: string
}
type StateType = {
   collapsed: boolean
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED';

const reducer = (state: StateType, action: ActionType): StateType => {
   switch (action.type) {
      case TOGGLE_CONSTANT:
         return {
            ...state,
            collapsed: !state.collapsed
         };
      default: throw new Error('Bad action type');
   }
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
   // let [collapsed, setCollapsed] = useState(false)
   let [state, dispatch] = useReducer(reducer, { collapsed: false })


   return (
      <div>
         {/* <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} /> */}
         <AccordionTitle title={props.titleValue} onClick={() => { dispatch({ type: TOGGLE_CONSTANT }) }} />
         {!state.collapsed && <AccordionBody />}
      </div >
   )
}

type AccordionTitlePropsType = {
   title: string
   onClick: () => void
}



export function AccordionTitle(props: AccordionTitlePropsType) {
   const clickChangeTitle = () => {
      props.onClick()
   }

   return (
      <h3 onClick={clickChangeTitle}>{props.title}</h3>
   )
}

export function AccordionBody() {
   return (
      <div>
         <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
      </div>
   )
}

export default UncontrolledAccordion